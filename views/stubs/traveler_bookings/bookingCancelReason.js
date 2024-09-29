import React from 'react';
import { Modal, Button, Form, Select, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const { Option } = Select;

const BookingCancelReason = () => (
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
      <div className="booking-details__info pb-8 mb-24">
        <p className="modal__text mb-16">
          Are you sure you want to cancel this booking? If you cancel this booking today you will
          receive <b className="fw-600">$1,000</b> back.
        </p>
        <p className="modal__text mb-24">Why do you need to cancel?</p>
        <Form layout="vertical" size="large">
          <Form.Item htmlFor="reason" label="Please select a reason" className="mb-16">
            <Select
              placeholder="Select gender"
              className="w-100"
              suffixIcon={<SvgIcon icon="arrow-down" />}
              id="reason"
              value="Other"
            >
              <Option>I no longer need accommodation</Option>
              <Option>I made the booking by accident</Option>
              <Option>I have an extenuating circumstance</Option>
              <Option>My host needs to cancel</Option>
              <Option>I&apos;m uncomfortable with the host</Option>
              <Option>My travel dates changed</Option>
              <Option>Other</Option>
            </Select>
          </Form.Item>
          <Form.Item htmlFor="cancellation-reason">
            <Input placeholder="Write your cancellation reason" id="cancellation-reason" />
          </Form.Item>
        </Form>
      </div>
      <h3 className="modal__title mb-24">Cancel by</h3>
      <div className="booking-details__info pb-24 mb-24">
        <div className="booking-details__item booking-details__item--modal">
          <p className="booking-details__item-column mb-0">
            <span className="booking-details__info-title">Address</span>
            <span className="booking-details__date">4:00 PM</span>
          </p>
          <span className="booking-details__value">50% refund, minus the service fee.</span>
        </div>
      </div>
      <div className="booking-details__info">
        <div className="booking-details__item booking-details__item--modal">
          <p className="booking-details__item-column mb-0">
            <span className="booking-details__info-title">March 16</span>
            <span className="booking-details__date">4:00 PM (Check-in)</span>
          </p>
          <span className="booking-details__value">
            Refund of the cleaning fee, if you paid one.
          </span>
        </div>
      </div>
    </div>
  </Modal>
);

export default BookingCancelReason;
