import React from 'react';
import { Modal, Button, Form, DatePicker } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const { RangePicker } = DatePicker;

const CheckoutDates = () => (
  <Modal
    title={
      <>
        <h2 className="text-headline-2 mb-8">23 nights</h2>
        <p className="modal__description mb-0">March 16, 2022 - April 7, 2022</p>
      </>
    }
    visible
    closable
    className="modal"
    width={688}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--tertiary mr-16 ml-sm-auto mb-8 mb-sm-0"
        >
          Clear dates
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
      <Form layout="horizontal" size="large">
        <Form.Item htmlFor="datepicker" className="mb-0">
          <RangePicker className="w-100" size="large" id="datepicker" />
        </Form.Item>
      </Form>
    </div>
  </Modal>
);

export default CheckoutDates;
