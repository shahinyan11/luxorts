import React from 'react';
import { Input, Button, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import MainHeader from '../layout/header';

const Login = () => (
  <div className="main-layout">
    <MainHeader text="Don't have an account yet?" buttonText="Sign Up" isLogin />
    <div className="main-layout__content">
      <div className="sign-up">
        <h1 className="sign-up__title">Welcome back!</h1>
        <p className="sign-up__caption">Enter your details to proceed further.</p>
        <Form layout="vertical" size="large">
          <div className="sign-up__container mb-16">
            <Form.Item label="Email" htmlFor="email">
              <Input placeholder="jeremy.bogan@gmail.com" id="email" type="email" />
            </Form.Item>
          </div>
          <div className="sign-up__container mb-36">
            <div className="input-text w-100">
              <div className="d-flex justify-content-space-between">
                <label className="input-text__label" htmlFor="password">
                  Password
                </label>
                <a href="#" className="main-text-btn fz-12">
                  Forgot password?
                </a>
              </div>
              <Form.Item>
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

export default Login;
