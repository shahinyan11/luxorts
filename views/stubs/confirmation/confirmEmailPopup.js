import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const ConfirmEmailPopup = () => (
  <Modal
    title="Confirm your email"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="button"
          className="main-btn main-btn--secondary main-btn--medium min-width-120 mb-8 mb-sm-0"
        >
          Resend email
        </Button>
        <Button
          htmlType="reset"
          className="main-btn main-btn--medium main-btn--tertiary mr-16 ml-sm-auto mb-8 mb-sm-0"
        >
          Cancel
        </Button>
        <Button
          htmlType="submit"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Confirm
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <div className="confirm d-flex flex-column align-items-center">
        <img src="/images/email.png" alt="" width="136" height="136" className="mb-24" />
        <p className="confirm__text mb-0">
          We sent an email to <b className="confirm__text-bold">rodney.harmon@gmail.com.</b>
        </p>
        <p className="confirm__text mb-24">
          Enter security code from the email to confirm your email address.
        </p>
        <Form layout="vertical" size="large" className="w-100">
          <Form.Item className="mb-0">
            <Input placeholder="Enter security code" id="first-name" />
          </Form.Item>
        </Form>
      </div>
    </div>
  </Modal>
);

export default ConfirmEmailPopup;
