import React, { useState } from 'react';
import { DatePicker, Input, Button, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-number-input';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';
import SvgIcon from '../shared/SvgIcon';

const SignUpFieldError = () => {
  const [value, setValue] = useState();

  return (
    <div className="main-layout">
      <MainHeader isLogin />
      <div className="main-layout__content">
        <div className="sign-up">
          <h1 className="sign-up__title">Sign up to getting started</h1>
          <p className="sign-up__caption">Enter your details to proceed further.</p>
          <Form layout="vertical" size="large">
            <Form.Item label="First Name" htmlFor="first-name">
              <Input placeholder="Placeholder" id="first-name" />
            </Form.Item>
            <p className="subline-message subline-message--error">
              <SvgIcon icon="alert" />
              Can&apos;t be blank
            </p>
            <Form.Item label="Last Name" htmlFor="last-name">
              <Input
                placeholder="Placeholder"
                id="last-name"
                value="Harmonnnnnnnnnnnnnnnnnnnnnnnnn"
              />
            </Form.Item>
            <p className="subline-message subline-message--error">
              <SvgIcon icon="alert" />
              Must be equal or less than 255 characters
            </p>
            <div className="sign-up__container mb-20">
              <Form.Item label="Date Of Birth" htmlFor="date-birth">
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  className="w-100"
                  size="large"
                  id="date-birth"
                />
              </Form.Item>
              <p className="subline-message mb-0">
                <SvgIcon icon="alert" />
                To sign up, you need to be at least 18. Your date of birth won&apos;t be shared with
                other people
              </p>
            </div>
            <div className="sign-up__container mb-16">
              <Form.Item label="Email" htmlFor="email">
                <Input placeholder="jeremy.bogan@gmail.com" id="email" type="email" />
              </Form.Item>
              <p className="subline-message subline-message--error">
                <SvgIcon icon="alert" />
                Email has a wrong format
              </p>
            </div>
            <div className="sign-up__container">
              <Form.Item label="Phone Number" htmlFor="input-phone">
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={value}
                  onChange={setValue}
                  id="input-phone"
                  className="main-phone-input"
                />
              </Form.Item>
              <p className="subline-message subline-message--error">
                <SvgIcon icon="alert" />
                Phone number is already taken
              </p>
            </div>
            <div className="sign-up__container mb-36">
              <Form.Item label="Password" htmlFor="input-password" className="mb-4">
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
                  Use a minimum password length of 6 or more characters, including capital letters
                  and numbers
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-flex-end">
              <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <MainFooter isRegistration />
    </div>
  );
};

export default SignUpFieldError;
