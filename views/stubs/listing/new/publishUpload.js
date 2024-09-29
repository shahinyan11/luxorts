import React from 'react';
import { Button, Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import UploadPhoto from 'views/stubs/shared/Upload/component';

const PublishUpload = () => (
  <Modal
    title="Please upload your profile image to publish the listing"
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
      <p className="modal__text mb-24">Image format: JPG or PNG. Max size: 10 Mb.</p>
      <UploadPhoto />
    </div>
  </Modal>
);

export default PublishUpload;
