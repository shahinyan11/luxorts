import React from 'react';
import { Modal, Select, Button, Form, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const { Option } = Select;

const PaymentsAndPayoutsAddCardFilled = () => (
  <Modal
    title="Add credit or debit card"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="d-flex justify-content-flex-end w-100">
        <Button htmlType="button" className="main-btn main-btn--medium main-btn--tertiary mr-16">
          Cancel
        </Button>
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Save
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <div className="d-flex mb-16">
        <img alt="" src="/images/visa.png" width="32" height="32" className="mr-16" />
        <img alt="" src="/images/mastercard.png" width="32" height="32" className="mr-16" />
      </div>
      <Form layout="vertical" size="large">
        <div className="container-two-items">
          <Form.Item label="First Name" htmlFor="first-name">
            <Input placeholder="Placeholder" id="first-name" value="Rodney" />
          </Form.Item>
          <Form.Item label="Last Name" htmlFor="last-name">
            <Input placeholder="Placeholder" id="last-name" value="Harmon" />
          </Form.Item>
        </div>
        <Form.Item label="Card Number" htmlFor="card-number">
          <Input value="4218 5600 0008 1264" id="card-number" />
        </Form.Item>
        <div className="container-two-items">
          <Form.Item label="Expiration" htmlFor="expiration">
            <Input placeholder="MM/YY" id="expiration" value="11/24" />
          </Form.Item>
          <Form.Item label="CVV" htmlFor="cvv">
            <Input placeholder="123" id="cvv" value="468" />
          </Form.Item>
        </div>
        <div className="container-two-items">
          <Form.Item label="ZIP Code" htmlFor="zip">
            <Input placeholder="123" id="zip" value="19102" />
          </Form.Item>
          <Form.Item label="Country" htmlFor="country">
            <Select
              showSearch
              placeholder="Select country"
              className="w-100"
              id="country"
              suffixIcon={<SvgIcon icon="arrow-down" />}
            >
              <Option value="">Ukraine</Option>
              <Option value="">United Arab Emirates</Option>
              <Option value="">United Kingdom</Option>
              <Option value="">United States</Option>
              <Option value="">Uruguay</Option>
            </Select>
          </Form.Item>
        </div>
      </Form>
    </div>
  </Modal>
);

export default PaymentsAndPayoutsAddCardFilled;
