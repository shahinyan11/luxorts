import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const ContactSupport = () => (
  <Modal
    title="Contact support"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
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
          Send
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <Form layout="vertical" size="large">
        <Form.Item htmlFor="message" className="mb-0">
          <Input.TextArea placeholder="Type your message" id="message" rows="3" />
        </Form.Item>
      </Form>
    </div>
  </Modal>
);

export default ContactSupport;
