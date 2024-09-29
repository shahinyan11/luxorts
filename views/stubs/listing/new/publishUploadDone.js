import React from 'react';
import { Button, Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const PublishUploadDone = () => (
  <Modal
    title="Congrats! Your listing is now being reviewed"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--primary mr-16 ml-sm-auto mb-8 mb-sm-0"
        >
          Go to Listings
        </Button>
      </div>
    }
  >
    <div className="modal__content text-align-center">
      <img alt="" width="136" height="136" src="/images/upload-listing.png" className="mb-24" />
      <p className="modal__text mb-0">
        This listing will automatically be published on Luxorts after moderation is completed.
      </p>
    </div>
  </Modal>
);

export default PublishUploadDone;
