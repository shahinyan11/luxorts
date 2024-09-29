import React from 'react';
import { Modal, Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const BookingAccept = () => (
  <Modal
    title="Accept booking"
    visible
    closable
    className="modal"
    width={412}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--tertiary mr-16 ml-sm-auto mb-8 mb-sm-0"
        >
          Cancel
        </Button>
        <Button
          htmlType="reset"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Accept
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <p className="modal__text mb-0">Are you sure you want to accept this booking?</p>
    </div>
  </Modal>
);

export default BookingAccept;
