import React from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const { Option } = Select;

const CheckoutAddress = () => (
  <Modal
    title="Address"
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
        <p className="modal__text mb-24">Use a permanent address where you can receive mail.</p>
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
        <Form.Item label="Street" htmlFor="street">
          <Input placeholder="Placeholder" id="street" />
        </Form.Item>
        <Form.Item label="Suite, Apartment Number (Optional)" htmlFor="apartment">
          <Input placeholder="Placeholder" id="apartment" />
        </Form.Item>
        <div className="container-two-items">
          <Form.Item label="City" htmlFor="city">
            <Input placeholder="Placeholder" id="city" />
          </Form.Item>
          <Form.Item label="State/Region" htmlFor="region">
            <Select
              showSearch
              placeholder="Select state/region"
              className="w-100"
              id="region"
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
        <div className="container-two-items">
          <Form.Item label="Zip Code" htmlFor="zip" className="mb-24">
            <Input placeholder="Placeholder" id="zip" />
          </Form.Item>
        </div>
      </Form>
    </div>
  </Modal>
);

export default CheckoutAddress;
