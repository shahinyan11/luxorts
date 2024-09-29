import React from 'react';
import { Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const BookingHouseRules = () => (
  <Modal
    title="House rules"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={false}
  >
    <div className="modal__content booking-details">
      <div className="booking-details__info pb-24 mb-24">
        <ul className="booking-details__rules">
          <li className="booking-details__rule">
            <SvgIcon icon="fire" className="booking-details__rule-icon" />
            <span className="booking-details__rule-text">Check-in: After 4:00 PM</span>
          </li>
          <li className="booking-details__rule">
            <SvgIcon icon="fire" className="booking-details__rule-icon" />
            <span className="booking-details__rule-text">Checkout: 11:00 AM</span>
          </li>
          <li className="booking-details__rule">
            <SvgIcon icon="fire" className="booking-details__rule-icon" />
            <span className="booking-details__rule-text">Self check-in with keypad</span>
          </li>
          <li className="booking-details__rule">
            <SvgIcon icon="fire" className="booking-details__rule-icon" />
            <span className="booking-details__rule-text">No smoking</span>
          </li>
          <li className="booking-details__rule">
            <SvgIcon icon="fire" className="booking-details__rule-icon" />
            <span className="booking-details__rule-text">No pets</span>
          </li>
          <li className="booking-details__rule">
            <SvgIcon icon="fire" className="booking-details__rule-icon" />
            <span className="booking-details__rule-text">No parties or events</span>
          </li>
        </ul>
      </div>
      <h3 className="modal__title mb-24">Additional rules</h3>
      <ol className="modal__list">
        <li className="modal__text mb-16">
          1. Smoking, parties, and excessive noise are not allowed, including on balconies and in
          shared spaces. Smoking violations are subject to a $250 fine plus the cost to clean,
          deodorize, and repair damages.
        </li>
        <li className="modal__text mb-16">
          2. Commercial photography/videography without written consent, illegal activity,
          prostitution, and possession of firearms is strictly prohibited.
        </li>
        <li className="modal__text">
          3. Overnight guests that exceed the number stated in the reservation are not allowed.
        </li>
      </ol>
    </div>
  </Modal>
);

export default BookingHouseRules;
