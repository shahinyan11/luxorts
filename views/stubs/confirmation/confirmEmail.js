import React from 'react';
import { Button, Form, Input } from 'antd';
import MainHeader from '../layout/header';

const ConfirmEmail = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content">
      <div className="confirm mt-40 mb-40 mt-sm-88 mb-sm-88 d-flex flex-column align-items-center">
        <img src="/images/email.png" alt="" width="136" height="136" className="mb-40" />
        <h1 className="mb-8 confirm__title">Confirm your email</h1>
        <p className="confirm__text mb-0">
          We sent an email to <b className="confirm__text-bold">rodney.harmon@gmail.com.</b>
        </p>
        <p className="confirm__text mb-32">
          Enter security code from the email to confirm your email address.
        </p>
        <Form layout="vertical" size="large" className="w-100">
          <Form.Item className="mb-32">
            <Input placeholder="Enter security code" id="first-name" />
          </Form.Item>
          <div className="confirm__buttons d-flex justify-content-space-between w-100">
            <Button htmlType="button" className="main-btn main-btn--secondary min-width-140">
              Resend email
            </Button>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
              Confirm
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default ConfirmEmail;
