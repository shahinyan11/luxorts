import React from 'react';
import { Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const BookingCancellationPolice = () => (
  <Modal
    title="Cancellation policy"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={false}
  >
    <div className="modal__content booking-details">
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

export default BookingCancellationPolice;
