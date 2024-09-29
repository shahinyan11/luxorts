import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { Button, Form, Input } from 'antd';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const ContactUs = () => {
  const [value, setValue] = useState();

  return (
    <div className="main-layout">
      <MainHeader isLanding isWithFilter />
      <div className="main-layout__content main-layout__content--full-width">
        <section className="contact-us pt-40 pt-md-80 pb-72 pb-md-140">
          <div className="contact-us__container text-align-center">
            <h1 className="contact-us__title mb-8">Get in touch</h1>
            <p className="contact-us__description mb-0">
              Have any questions? We&apos;d like to hear from you.
            </p>
          </div>
        </section>
        <section className="conversation mb-40 mb-80">
          <Form
            layout="vertical"
            size="large"
            className="conversation__content pt-76 pt-md-152 pb-40 pb-md-80"
          >
            <h2 className="conversation__title mb-40">Let&apos;s start a conversation</h2>
            <div className="container-two-items">
              <Form.Item label="First Name" htmlFor="first-name">
                <Input placeholder="Placeholder" id="first-name" />
              </Form.Item>
              <Form.Item label="Last Name" htmlFor="last-name">
                <Input placeholder="Placeholder" id="last-name" />
              </Form.Item>
            </div>
            <div className="container-two-items">
              <Form.Item label="Email" htmlFor="email">
                <Input placeholder="jeremy.bogan@gmail.com" id="email" type="email" />
              </Form.Item>
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
            </div>
            <Form.Item htmlFor="message" label="Message" className="mb-32">
              <Input.TextArea placeholder="How we can help?" id="message" />
            </Form.Item>
            <div className="d-flex justify-content-flex-end">
              <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
                Submit
              </Button>
            </div>
          </Form>
        </section>
      </div>
      <MainFooter isFooterMenu isLanding />
    </div>
  );
};

export default ContactUs;
