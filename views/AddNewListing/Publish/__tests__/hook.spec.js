import { act, renderHook } from '@testing-library/react-hooks';

import { LISTING_STATUS } from 'constants/listing';

import checkUserVerification from 'utils/auth/checkUserVerification';

import { fetchListing, updateListingStatus } from 'state/concepts/listings/actions';
import { showModal } from 'state/modal/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';
import { listingSelector } from 'state/concepts/listings/selectors';
import { dispatch, store } from '__mocks__/react-redux';

import mockedListing from 'views/__mocks__/mockedListing';
import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));
jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));
jest.mock('utils/listing/checkListingCompleteness');

const mockedListingId = 'listingId';
const mockedRouter = {
  query: { listingId: mockedListingId },
};
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

describe('Publish useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));

    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onPublishListingClickHandler method', () => {
    const modal = {
      modalType: 'PUBLISH_LISTING_MODAL',
    };

    it('should dispatches updateListingStatus when user avatar is present and listing status does not equal `on_moderation`', () => {
      result.current.onPublishListingClickHandler();

      expect(dispatch).toHaveBeenCalledWith(
        updateListingStatus({
          listingId: mockedListingId,
          status: LISTING_STATUS.ON_MODERATION,
          modal,
        }),
      );
    });

    it('should dispatches showModal with PUBLISH_LISTING_MODAL when user avatar is present and listing status equals `on_moderation`', () => {
      listingSelector.mockReturnValueOnce({
        ...mockedListing,
        status: LISTING_STATUS.ON_MODERATION,
      });

      ({ result } = renderHook(useContainer));

      act(() => {
        result.current.onPublishListingClickHandler();
      });

      expect(dispatch).toHaveBeenCalledWith(showModal(modal));
    });

    it('should dispatches showModal with UPLOAD_PROFILE_IMAGE_MODAL when user avatar isn`t present', () => {
      currentUserSelector.mockReturnValueOnce({
        ...mockedCurrentUser,
        userProfile: {
          ...mockedCurrentUser.userProfile,
          avatarUrls: null,
        },
      });

      ({ result } = renderHook(useContainer));

      act(() => {
        result.current.onPublishListingClickHandler();
      });

      expect(dispatch).toHaveBeenCalledWith(
        showModal({
          modalType: 'UPLOAD_PROFILE_IMAGE_MODAL',
          modalProps: {
            title: { id: 'shared.pleaseUploadYourProfileImageToPublishTheListing' },
          },
        }),
      );
    });
  });

  describe('onSaveAsDraftClickHandler method', () => {
    const modal = {
      modalType: 'PUBLISH_LISTING_MODAL',
      modalProps: {
        title: { id: 'publish.modal.draft.title' },
        description: { id: 'publish.modal.draft.description' },
      },
    };

    it('should dispatches showModal with PUBLISH_LISTING_MODAL when listing status equals `in_draft`', () => {
      act(() => {
        result.current.onSaveAsDraftClickHandler();
      });

      expect(dispatch).toHaveBeenCalledWith(showModal(modal));
    });

    it('should dispatches updateListingStatus when listing status does not equal `in_draft`', () => {
      listingSelector.mockReturnValueOnce({
        ...mockedListing,
        status: LISTING_STATUS.ON_MODERATION,
      });

      ({ result } = renderHook(useContainer));

      act(() => {
        result.current.onSaveAsDraftClickHandler();
      });

      expect(dispatch).toHaveBeenCalledWith(
        updateListingStatus({
          listingId: mockedListingId,
          status: LISTING_STATUS.IN_DRAFT,
          modal,
        }),
      );
    });
  });

  describe('publishAfterAvatarUploading method', () => {
    const modal = {
      modalType: 'PUBLISH_LISTING_MODAL',
    };

    it('shouldn`t dispatches when publishRequested equals false', () => {
      result.current.publishAfterAvatarUploading();

      expect(dispatch).not.toHaveBeenCalled();
    });

    it('should dispatches updateListingStatus when user avatar is present, publishRequested equals true, and listing status does not equal `on_moderation`', () => {
      act(() => {
        result.current.setPublishRequested(true);
      });

      result.current.publishAfterAvatarUploading();

      expect(dispatch).toHaveBeenCalledWith(
        updateListingStatus({
          listingId: mockedListingId,
          status: LISTING_STATUS.ON_MODERATION,
          modal,
        }),
      );
    });

    it('should dispatches showModal with PUBLISH_LISTING_MODAL when user avatar is present, publishRequested equals true, and listing status equals `on_moderation`', () => {
      listingSelector.mockReturnValue({
        ...mockedListing,
        status: LISTING_STATUS.ON_MODERATION,
      });

      ({ result } = renderHook(useContainer));

      act(() => {
        result.current.setPublishRequested(true);
      });

      result.current.publishAfterAvatarUploading();

      expect(dispatch).toHaveBeenCalledWith(showModal(modal));
    });
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        listingId: mockedListingId,
      },
      req: {},
    };

    it('should dispatches fetchListing when user is verified and listingId is present', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledWith(fetchListing(mockedListingId));
    });

    it('shouldn`t dispatches any actions when user is verified and listingId isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: {},
      });

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('shouldn`t dispatches any actions when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('should calls whenComplete callback when is server', async () => {
      await getInitialProps(ctx);

      expect(store.logicMiddleware.whenComplete).toHaveBeenCalled();
    });

    it('shouldn`t calls whenComplete callback when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.logicMiddleware.whenComplete).not.toHaveBeenCalled();
    });
  });
});
