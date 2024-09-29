import React from 'react';
import { Button, Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const PublishExit = () => (
  <Modal
    title="Exit listing creation"
    visible
    closable
    className="modal"
    width={412}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="reset"
          className="main-btn main-btn--medium main-btn--tertiary mr-16 ml-sm-auto mb-8 mb-sm-0"
        >
          Go back
        </Button>
        <Button
          htmlType="submit"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Save and exit
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <p className="modal__text mb-16">Are you sure you want to exit listing creation?</p>
      <p className="modal__text mb-0">
        This listing will be saved as a draft, so you can edit and publish it later.
      </p>
    </div>
  </Modal>
);

export default PublishExit;
