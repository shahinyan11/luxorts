import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const CheckoutLicense = () => (
  <Modal
    title="Name on driver's license"
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
          htmlType="submit"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Save
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <Form layout="vertical" size="large">
        <p className="modal__text mb-24">This is the name on your driver&apos;s license.</p>
        <div className="container-two-items mb-8">
          <Form.Item label="First Name" htmlFor="first-name" className="mb-0">
            <Input placeholder="Placeholder" id="first-name" />
          </Form.Item>
          <Form.Item label="Last Name" htmlFor="last-name" className="mb-0">
            <Input placeholder="Placeholder" id="last-name" />
          </Form.Item>
        </div>
      </Form>
    </div>
  </Modal>
);

export default CheckoutLicense;
