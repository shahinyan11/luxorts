import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const BookingReject = () => (
  <Modal
    title="Reject booking"
    visible
    closable
    className="modal"
    width={558}
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
          className="main-btn main-btn--medium main-btn--warning min-width-120"
        >
          Reject
        </Button>
      </div>
    }
  >
    <div className="modal__content booking-details">
      <p className="modal__text mb-24">Are you sure you want to reject this booking?</p>
      <Form layout="vertical" size="large">
        <Form.Item htmlFor="reject-reason" label="Rejection Reason (Optional)" className="mb-0">
          <Input placeholder="Write your rejection reason" id="reject-reason" />
        </Form.Item>
      </Form>
    </div>
  </Modal>
);

export default BookingReject;
