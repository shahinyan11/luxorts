import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { compose, path } from 'ramda';

import { LISTING_STATUS } from 'constants/listing';

import checkUserVerification from 'utils/auth/checkUserVerification';
import isPresent from 'utils/isPresent';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';

import { fetchListing, updateListingStatus } from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  updateListingStatusEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { showModal } from 'state/modal/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';

function useContainer() {
  const dispatch = useDispatch();
  const router = useRouter();

  const listingId = router.query?.listingId;

  // local state
  const [publishRequested, setPublishRequested] = useState(false);

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingStatusEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const currentUser = useSelector(currentUserSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const listingDoesntExist = isPresent(listingId) && !isPresent(listing);
  const showSkeleton = isFetching || listingDoesntExist;

  // prepare data
  const isUserAvatarPresent = compose(isPresent, path(['userProfile', 'avatarUrls']))(currentUser);
  const listingStatus = listing?.status;

  /**
   * Handle publish listing button click
   */
  const onPublishListingClickHandler = useCallback(() => {
    const modal = {
      modalType: 'PUBLISH_LISTING_MODAL',
    };

    if (!isUserAvatarPresent) {
      setPublishRequested(true);

      dispatch(
        showModal({
          modalType: 'UPLOAD_PROFILE_IMAGE_MODAL',
          modalProps: {
            title: { id: 'shared.pleaseUploadYourProfileImageToPublishTheListing' },
          },
        }),
      );

      return;
    }

    if (listingStatus === LISTING_STATUS.ON_MODERATION) {
      dispatch(showModal(modal));

      return;
    }

    dispatch(
      updateListingStatus({
        listingId,
        status: LISTING_STATUS.ON_MODERATION,
        modal,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAvatarPresent, listingStatus]);

  /**
   * Handle save as draft button click
   */
  const onSaveAsDraftClickHandler = useCallback(() => {
    const modal = {
      modalType: 'PUBLISH_LISTING_MODAL',
      modalProps: {
        title: { id: 'publish.modal.draft.title' },
        description: { id: 'publish.modal.draft.description' },
      },
    };

    setPublishRequested(false);

    if (listingStatus === LISTING_STATUS.IN_DRAFT) {
      dispatch(showModal(modal));

      return;
    }

    dispatch(updateListingStatus({ listingId, status: LISTING_STATUS.IN_DRAFT, modal }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingStatus]);

  /**
   * Handle update listing status after avatar uploading
   */
  const publishAfterAvatarUploading = () => {
    const modal = {
      modalType: 'PUBLISH_LISTING_MODAL',
    };

    if (!publishRequested || !isUserAvatarPresent) {
      return;
    }

    if (listingStatus === LISTING_STATUS.ON_MODERATION) {
      dispatch(showModal(modal));

      return;
    }

    dispatch(
      updateListingStatus({
        listingId,
        status: LISTING_STATUS.ON_MODERATION,
        modal,
      }),
    );
  };

  /**
   * Lifecycle
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(publishAfterAvatarUploading, [publishRequested, isUserAvatarPresent, listingStatus]);

  return {
    isLoading,
    showSkeleton,
    onPublishListingClickHandler,
    onSaveAsDraftClickHandler,
    publishAfterAvatarUploading,
    setPublishRequested,
  };
}

export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;
  const isServer = Boolean(ctx.req);
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  if (isPresent(listingId)) {
    ctx.store.dispatch(fetchListing(listingId));
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkListingCompleteness(ctx);
    });
  }
};

export default useContainer;
