import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import { Button, Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const CropProfileImage = () => {
  const [setImage] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    x: 18,
    y: 4.44,
    width: 64,
    height: 91,
  });

  return (
    <Modal
      title="Upload profile image"
      visible
      closable
      className="modal"
      width={558}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={
        <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
          <Button
            htmlType="button"
            className="main-btn main-btn--secondary main-btn--medium min-width-120 mb-8 mb-sm-0"
          >
            Change image
          </Button>
          <Button
            htmlType="reset"
            className="main-btn main-btn--medium main-btn--tertiary mr-16 ml-sm-auto mb-8 mb-sm-0"
          >
            Cancel
          </Button>
          <Button
            htmlType="submit"
            className="main-btn main-btn--medium main-btn--primary min-width-120"
          >
            Save
          </Button>
        </div>
      }
    >
      <div className="modal__content">
        <ReactCrop
          onImageLoaded={setImage}
          crop={crop}
          onChange={setCrop}
          circularCrop
          aspect={1 / 1}
        >
          <img src="/images/profile.jpg" alt="" width="510" height="360" />
        </ReactCrop>
      </div>
    </Modal>
  );
};

export default CropProfileImage;
