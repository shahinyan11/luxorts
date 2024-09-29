import React from 'react';
import { Button, Form, Input } from 'antd';
import MainHeader from '../layout/header';

const SecurityCode = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content">
      <div className="confirm d-flex flex-column align-items-center">
        <img src="/images/email.png" alt="" width="136" height="136" className="mb-32" />
        <h1 className="mb-8 confirm__title">Recover your password</h1>
        <p className="confirm__text mb-0">
          We sent an email to <b className="confirm__text-bold">rodney.harmon@gmail.com.</b>
        </p>
        <p className="confirm__text mb-32">
          Enter security code from the email to set a new password.
        </p>
        <Form layout="vertical" size="large" className="w-100">
          <Form.Item className="mb-32">
            <Input placeholder="Enter security code" id="first-name" />
          </Form.Item>
          <div className="confirm__buttons d-flex flex-column flex-sm-row align-items-center justify-content-space-between w-100">
            <a href="#" className="main-btn main-btn--tertiary mb-16 mb-sm-0">
              Back to Sign In
            </a>
            <Button
              htmlType="button"
              className="main-btn main-btn--secondary min-width-140 ml-sm-auto mr-sm-16 mb-16 mb-sm-0"
            >
              Resend email
            </Button>
            <Button
              htmlType="submit"
              className="main-btn main-btn--primary min-width-140 mb-16 mb-sm-0"
            >
              Confirm
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default SecurityCode;
