import React from 'react';
import { Button, Form, Input } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const CheckoutSignIn = () => (
  <div className="main-layout">
    <MainHeader isNarrow isBackButton />
    <div className="main-layout__content">
      <div className="personal-information pt-32">
        <div className="personal-information__content">
          <div className="personal-information__user">
            <h1 className="text-display-2 mb-32">Book apartments</h1>
            <h2 className="personal-information__subtitle mb-24">Trip details</h2>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Dates</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Edit
                </a>
              </div>
              <p className="personal-information__value mb-24">March 16 - April 7</p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Guests</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Edit
                </a>
              </div>
              <p className="personal-information__value mb-24">2 guests</p>
            </div>
            <div className="personal-information__header-group d-flex align-items-center mb-16">
              <h2 className="personal-information__subtitle">Sign in to book</h2>
              <span className="personal-information__notice ml-md-auto">
                Don&apos;t have an account yet?
              </span>
              <Button
                htmlType="button"
                className="main-btn main-btn--secondary main-btn--medium min-width-120"
              >
                Sign Up
              </Button>
            </div>
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
          <section className="personal-information__column booking-details mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
            <img alt="" width="364" height="238" className="" src="/images/popular-00.jpg" />
            <div className="booking-details__sidebar apartment-card apartment-card--sidebar">
              <h3 className="apartment-card__title mb-0">
                <a href="#">Charming and comfortable house</a>
              </h3>
              <p className="apartment-card__description">Entire apartment in Center City</p>
              <p className="apartment-card__rating apartment-card__rating--sidebar d-flex align-items-center">
                <SvgIcon icon="star" className="apartment-card__star" />
                <span className="apartment-card__value">4.91</span>
                <a href="#" className="apartment-card__review">
                  (98 reviews)
                </a>
              </p>
              <div className="apartment-card__wrapper d-flex justify-content-space-between">
                <div className="apartment-card__info apartment-card__info--sidebar d-flex align-items-center">
                  2 guests
                  <SvgIcon icon="dot" className="apartment-card__dot" />
                  1 bedroom
                  <SvgIcon icon="dot" className="apartment-card__dot" />
                  2 beds
                  <SvgIcon icon="dot" className="apartment-card__dot" />1 bath
                </div>
              </div>
              <h2 className="booking-details__sidebar-subtitle mb-16">Price breakdown</h2>
              <div className="booking-details__info pb-16 mb-16">
                <p className="booking-details__item mb-8">
                  <span className="booking-details__feature">$60 x 23 nights</span>
                  <span className="booking-details__value">$1380</span>
                </p>
                <p className="booking-details__item mb-8">
                  <span className="booking-details__feature">Cleaning fee</span>
                  <span className="booking-details__value">$80</span>
                </p>
                <p className="booking-details__item mb-8">
                  <span className="booking-details__feature">Service fee</span>
                  <span className="booking-details__value">$130</span>
                </p>
                <p className="booking-details__item mb-0">
                  <span className="booking-details__feature">Occupancy taxes and fees</span>
                  <span className="booking-details__value">$160</span>
                </p>
              </div>
              <p className="booking-details__item mb-0">
                <span className="booking-details__total">Total</span>
                <span className="booking-details__total">$1,620</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default CheckoutSignIn;
