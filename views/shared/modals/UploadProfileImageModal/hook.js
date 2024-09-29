import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import { AVATAR_UPLOAD_BOUNDARIES, PHOTOS_VALIDATION } from 'constants/validations';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';

import getCroppedImg from 'utils/users/getCroppedImg';

import { userUpdateAvatar } from 'state/concepts/session/actions';
import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { userUpdateAvatarEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

function useContainer({ initialImgSrc }) {
  const dispatch = useDispatch();

  // local state
  const [imgSrc, setImgSrc] = useState(initialImgSrc);
  const [crop, setCrop] = useState({
    unit: 'px',
    width: AVATAR_UPLOAD_BOUNDARIES.DEFAULT_CROP_DIAMETER,
    height: AVATAR_UPLOAD_BOUNDARIES.DEFAULT_CROP_DIAMETER,
    x: 0,
    y: 0,
    image: null,
  });

  // selectors
  const { endpoint } = userUpdateAvatarEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * On image load handler
   * @type {(function(*): void)|*}
   */
  const onImageLoad = useCallback(
    (event) => {
      const { width, height } = event.currentTarget;
      const minSize = Math.min(width, height, AVATAR_UPLOAD_BOUNDARIES.DEFAULT_CROP_DIAMETER);

      const delta = 20;

      setCrop({
        ...crop,
        width: minSize - delta,
        height: minSize - delta,
        x: width / 2 - (minSize - delta) / 2,
        y: height / 2 - (minSize - delta) / 2,
        image: event.currentTarget,
      });
    },
    [crop],
  );

  /**
   * On crop change
   * @type {(function(*): void)|*}
   */
  const onCropChange = useImmutableCallback((newCrop) => {
    setCrop(newCrop);
  });

  /**
   * Change uploaded file
   * @type {(function(*): void)|*}
   */
  const onFileChange = useImmutableCallback((data) => {
    setImgSrc(URL.createObjectURL(data.file.originFileObj));
  });

  /**
   * Save uploaded image
   * @type {(function(*): void)|*}
   */
  const onSave = useCallback(async () => {
    if (!imgSrc) {
      dispatch(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'validations.pleaseUploadTheImage' },
        }),
      );

      return;
    }

    const blob = await getCroppedImg(crop.image, crop, 'avatar');
    const type = blob.type.split('/')[1];
    const file = new File([blob], `avatar.${type}`, { type: blob.type });

    if (file.size > PHOTOS_VALIDATION.MAX.SIZE) {
      dispatch(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'validations.avatarValidationError' },
        }),
      );

      return;
    }

    dispatch(userUpdateAvatar(file));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgSrc, crop]);

  return {
    crop,
    isLoading,
    imgSrc,
    onSave,
    onFileChange,
    onImageLoad,
    onCropChange,
  };
}

export default useContainer;
