import React from 'react';
import { Input, Button, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const LoginAndSecurityNewPassword = () => (
  <div className="main-layout">
    <MainHeader isAuthorized />
    <div className="main-layout__content">
      <div className="personal-information">
        <ul className="breadcrumbs mt-32 mb-16">
          <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">
              Account settings
            </a>
            <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />
          </li>
          <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">
              Login & security
            </a>
          </li>
        </ul>
        <h1 className="text-display-2 mb-lg-64 mb-32">Login & security</h1>
        <div className="personal-information__content">
          <div className="personal-information__user">
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label personal-information__label--active mb-0">
                  Password
                </p>
              </div>
              <p className="personal-information__descr text-body mb-16">
                Enter the new unique password to protect your account.
              </p>
              <Form layout="vertical" size="large">
                <div className="input-text w-100 mb-28">
                  <Form.Item label="New password" htmlFor="input-password" className="mb-4">
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
                    <div className="password-progress__line" />
                    <p className="subline-message mb-0">
                      <SvgIcon icon="alert" />
                      Use a minimum password length of 6 or more characters, including capital
                      letters and numbers
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-24">
                  <Button
                    htmlType="reset"
                    className="main-btn main-btn--tertiary min-width-120 mr-16"
                  >
                    Cancel
                  </Button>
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 mr-16"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <div className="personal-information__note mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
            <span className="personal-information__icon-container mb-16">
              <SvgIcon icon="user-shield" className="personal-information__icon" />
            </span>
            <h2 className="personal-information__subtitle text-subheader-2 mb-4">
              Login & security
            </h2>
            <p className="personal-information__text text-body mb-0">
              Settings and recommendations to help you keep your account secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginAndSecurityNewPassword;
