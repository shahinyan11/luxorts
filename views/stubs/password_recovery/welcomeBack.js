import React from 'react';
import { Input, Button, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const WelcomeBack = () => (
  <div className="main-layout">
    <MainHeader text="Don't have an account yet?" buttonText="Sign Up" />
    <div className="main-layout__content">
      <div className="sign-up">
        <h1 className="sign-up__title">Welcome back!</h1>
        <p className="sign-up__caption">Enter your details to proceed further.</p>
        <div className="flash-message flash-message--success mb-16">
          <SvgIcon icon="checked" className="flash-message__left-icon" />
          <span>Your password has been updated</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <Form layout="vertical" size="large" className="w-100">
          <div className="sign-up__container mb-16">
            <Form.Item label="Email" htmlFor="email">
              <Input placeholder="jeremy.bogan@gmail.com" id="email" type="email" />
            </Form.Item>
          </div>
          <div className="sign-up__container mb-36">
            <Form.Item label="Password" htmlFor="input-password">
              <Input.Password
                placeholder="Placeholder"
                id="input-password"
                iconRender={
                  // eslint-disable-next-line react/no-unstable-nested-components
                  (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)
                }
              />
            </Form.Item>
          </div>
          <div className="d-flex justify-content-flex-end">
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default WelcomeBack;
