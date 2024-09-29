import React from 'react';
import { Button, Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const ChangesNotSaved = () => (
  <Modal
    title="Changes not saved"
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
          Discard
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
      <p className="modal__text mb-0">Do you want to save changes for this listing?</p>
    </div>
  </Modal>
);

export default ChangesNotSaved;
