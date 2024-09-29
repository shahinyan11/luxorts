import React from 'react';
import { Modal, Spin } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const CheckoutGettingReady = () => (
  <Modal
    visible
    closable={false}
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={null}
  >
    <div className="modal__content">
      <div className="text-align-center pt-36 pb-36 pl-72 pr-72">
        <Spin
          indicator={
            <SvgIcon
              icon="spinner"
              className="modal__spinner mb-24 ant-spin-dot ant-spin-dot-spin"
            />
          }
        />
        <p className="mb-8 text-headline-2">Reviewing payment details</p>
        <p className="mb-0 modal__text">
          This may take a minute. Please don&apos;t close or refresh.
        </p>
      </div>
    </div>
  </Modal>
);

export default CheckoutGettingReady;
