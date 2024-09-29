import React from 'react';
import { Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const PayoutDetails = () => (
  <Modal
    title="Payout details"
    visible
    closable
    className="modal"
    width={412}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={false}
  >
    <div className="modal__content payout-details">
      <img
        alt=""
        width="364"
        height="238"
        src="/images/popular-00.jpg"
        className="payout-details__image mb-16"
      />
      <h3 className="modal__title payout-details__title pb-16 mb-20">
        Charming and comfortable house
      </h3>
      <div className="d-flex justify-content-space-between mb-16">
        <h4 className="payout-details__subtitle">Guest</h4>
        <p className="payout-details__column">
          <img alt="" width="32" height="32" src="/images/cameron.png" className="mr-8" />
          <span className="payout-details__text">Darrell Steward</span>
        </p>
      </div>
      <div className="d-flex justify-content-space-between mb-16">
        <h4 className="payout-details__subtitle">Payout method</h4>
        <p className="payout-details__column">
          <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
          <span className="payout-details__text">Mastercard **** 1648</span>
        </p>
      </div>
      <div className="d-flex justify-content-space-between mb-16">
        <h4 className="payout-details__subtitle">Date & time</h4>
        <p className="payout-details__column">
          <span className="payout-details__text">Jun 16, 2021 (10:00 AM)</span>
        </p>
      </div>
      <div className="d-flex justify-content-space-between mb-12">
        <h4 className="payout-details__subtitle">Amount</h4>
        <p className="payout-details__column">
          <span className="payout-details__text">$1,620.00</span>
        </p>
      </div>
    </div>
  </Modal>
);

export default PayoutDetails;
