import React from 'react';
import { Modal, Button, Form, Select } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const { Option } = Select;

const BookingCancel = () => (
  <Modal
    title="Cancel booking"
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
          Go back
        </Button>
        <Button
          htmlType="reset"
          className="main-btn main-btn--medium main-btn--warning min-width-120"
        >
          Cancel
        </Button>
      </div>
    }
  >
    <div className="modal__content booking-details">
      <p className="modal__text mb-16">
        Are you sure you want to cancel this booking? According to the cancellation policy, all
        cancellations made 1 week before check-in will lead to deducting{' '}
        <b className="fw-600">$50</b> from the next payout.
      </p>
      <p className="modal__text mb-24">Why do you need to cancel?</p>
      <Form layout="vertical" size="large">
        <Form.Item htmlFor="reason" label="Please select a reason" className="mb-0">
          <Select
            placeholder="Select gender"
            className="w-100"
            suffixIcon={<SvgIcon icon="arrow-down" />}
            id="reason"
            value="My place is unavailable"
          >
            <Option>My place is unavailable</Option>
            <Option>I&apos;m looking for a different price or trip length</Option>
            <Option>My guest needs to cancel</Option>
            <Option>I&apos;m uncomfortable with the guest</Option>
            <Option>Other</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  </Modal>
);

export default BookingCancel;
