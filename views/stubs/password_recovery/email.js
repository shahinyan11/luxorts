import React from 'react';
import { Button, Form, Input } from 'antd';
import MainHeader from '../layout/header';

const Email = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content">
      <div className="sign-up">
        <h1 className="sign-up__title text-align-center">Lost your password?</h1>
        <p className="sign-up__caption text-align-center">
          Please enter the email address you used when creating your account and we will send you a
          password recovery email.
        </p>
        <Form layout="vertical" size="large">
          <div className="sign-up__container mb-32">
            <Form.Item label="Email" htmlFor="email">
              <Input placeholder="jeremy.bogan@gmail.com" id="email" type="email" />
            </Form.Item>
          </div>
          <div className="d-flex justify-content-space-between align-items-center">
            <a href="#" className="main-btn main-btn--tertiary">
              Back to Sign In
            </a>
            <Button htmlType="button" className="main-btn main-btn--primary min-width-140">
              Recover
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default Email;
