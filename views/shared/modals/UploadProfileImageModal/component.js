import { Modal, Upload } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ReactCrop from 'react-image-crop';

import { ACCEPT_AVATAR_TYPES, AVATAR_UPLOAD_BOUNDARIES } from 'constants/validations';

import isPresent from 'utils/isPresent';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const UploadProfileImageModal = ({ onClose, title, initialImgSrc }) => {
  const { onCropChange, onImageLoad, onFileChange, onSave, imgSrc, isLoading, crop } = useContainer(
    { initialImgSrc },
  );

  const isImgSrcPresent = isPresent(imgSrc);

  const uploadProps = {
    onChange: onFileChange,
    accept: ACCEPT_AVATAR_TYPES,
    showUploadList: false,
  };

  return (
    <Modal
      title={<FormattedMessage {...title} />}
      visible
      className="modal"
      width={558}
      onCancel={onClose}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={
        <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
          {isImgSrcPresent && (
            <Upload {...uploadProps}>
              <GradientButton
                disabled={isLoading}
                text={{ id: 'shared.changeImage' }}
                className="main-btn--medium min-width-120 mb-8 mb-sm-0"
                variant="secondary"
              />
            </Upload>
          )}
          <GradientButton
            onClick={onClose}
            disabled={isLoading}
            text={{ id: 'shared.cancel' }}
            className="main-btn--medium mr-16 ml-sm-auto mb-8 mb-sm-0"
            variant="tertiary"
          />
          <GradientButton
            loading={isLoading}
            onClick={onSave}
            text={{ id: 'shared.save' }}
            className="main-btn--medium min-width-120"
          />
        </div>
      }
    >
      <div className="modal__content">
        {isImgSrcPresent && (
          <ReactCrop
            crop={crop}
            onChange={onCropChange}
            keepSelection
            circularCrop
            minWidth={AVATAR_UPLOAD_BOUNDARIES.MIN_WIDTH}
            minHeight={AVATAR_UPLOAD_BOUNDARIES.MIN_HEIGHT}
            maxWidth={AVATAR_UPLOAD_BOUNDARIES.MAX_WIDTH}
            maxHeight={AVATAR_UPLOAD_BOUNDARIES.MAX_HEIGHT}
            aspect={AVATAR_UPLOAD_BOUNDARIES.ASPECT}
          >
            <img src={imgSrc} onLoad={onImageLoad} alt="" />
          </ReactCrop>
        )}
        {!isImgSrcPresent && (
          <>
            <p className="modal__text mb-24">
              <FormattedMessage id="validations.imageFormatAndMaxSize" />
            </p>
            <Upload.Dragger {...uploadProps}>
              <Image src="/images/upload.png" width="136" height="136" alt="" className="mb-16" />
              <p className="ant-upload-hint text-body mb-0">
                <FormattedMessage id="shared.uploadImageOrDropItHere" />
              </p>
            </Upload.Dragger>
          </>
        )}
      </div>
    </Modal>
  );
};

UploadProfileImageModal.defaultProps = {
  title: { id: 'shared.uploadProfileImage' },
  initialImgSrc: undefined,
};

UploadProfileImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.shape(),
  initialImgSrc: PropTypes.string,
};

export default UploadProfileImageModal;
