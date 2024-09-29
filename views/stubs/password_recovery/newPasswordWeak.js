import React from 'react';
import { Input, Button, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const NewPasswordWeak = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content">
      <div className="sign-up">
        <h1 className="sign-up__title text-align-center">New password</h1>
        <p className="sign-up__caption text-align-center">
          Please set a new password for your account.
        </p>
        <Form layout="vertical" size="large">
          <div className="sign-up__container mb-36">
            <Form.Item label="New Password" htmlFor="input-password" className="mb-4">
              <Input.Password
                placeholder="Placeholder"
                id="input-password"
                iconRender={
                  // eslint-disable-next-line react/no-unstable-nested-components
                  (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)
                }
              />
            </Form.Item>
            <div className="password-progress">
              <div className="password-progress__line password-progress__line--error" />
              <p className="subline-message subline-message--error mb-0">
                <SvgIcon icon="alert" />
                Use a minimum password length of 6 or more characters, including capital letters and
                numbers
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-space-between align-items-center">
            <a href="#" className="main-btn main-btn--tertiary">
              Back to Sign In
            </a>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default NewPasswordWeak;
