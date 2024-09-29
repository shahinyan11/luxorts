import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { path } from 'ramda';

import useImmutableCallback from 'hooks/useImmutableCallback';

import { showModal } from 'state/modal/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';

import checkUserVerification from 'utils/auth/checkUserVerification';

function useContainer() {
  const inputFileRef = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const avatarImgUrl = path(['userProfile', 'avatarUrls', 'original'], currentUser);

  /**
   * Show UPLOAD_PROFILE_IMAGE_MODAL
   * @type {(function(*): void)|*}
   */
  const handleUploadAvatarClick = useImmutableCallback(() => {
    dispatch(
      showModal({
        modalType: 'UPLOAD_PROFILE_IMAGE_MODAL',
      }),
    );
  });

  /**
   * Show REMOVE_PHOTO_MODAL
   * @type {(function(*): void)|*}
   */
  const handleRemoveAvatarClick = useImmutableCallback(() => {
    dispatch(
      showModal({
        modalType: 'REMOVE_PHOTO_MODAL',
      }),
    );
  });

  /**
   * Change avatar image
   * @param event {object}
   * @type {(function(*): void)|*}
   */
  const handleChangeAvatarImage = useImmutableCallback((event) => {
    event.stopPropagation();

    inputFileRef.current.click();
  });

  /**
   * Handle change image avatar file
   * @param event {object}
   * @type {(function(*): void)|*}
   */
  const handleChangeFile = useImmutableCallback((event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    dispatch(
      showModal({
        modalType: 'UPLOAD_PROFILE_IMAGE_MODAL',
        modalProps: {
          initialImgSrc: URL.createObjectURL(file),
        },
      }),
    );

    // clear input file
    inputFileRef.current.value = null;
  });

  return {
    currentUser,
    handleUploadAvatarClick,
    handleRemoveAvatarClick,
    handleChangeAvatarImage,
    handleChangeFile,
    avatarImgUrl,
    inputFileRef,
  };
}

export const getInitialProps = async (ctx) => {
  checkUserVerification(ctx);
};

export default useContainer;
