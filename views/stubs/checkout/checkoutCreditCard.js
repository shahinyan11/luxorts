import React from 'react';
import { Button, Form, Select, Input } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const { Option, OptGroup } = Select;

const CheckoutCreditCard = () => (
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
            <div className="personal-information__header-group d-flex align-items-center mb-24">
              <h2 className="personal-information__subtitle">Payment for booking</h2>
              <img alt="" width="24" height="24" src="/images/visa.png" className="ml-auto" />
              <img alt="" width="24" height="24" src="/images/mastercard.png" />
              <img alt="" width="24" height="24" src="/images/paypal.png" />
            </div>
            <div className="personal-information__item mb-24">
              <Form layout="vertical" size="large">
                <Form.Item htmlFor="reason" className="mb-24">
                  <Select
                    placeholder="Select gender"
                    className="w-100"
                    suffixIcon={<SvgIcon icon="arrow-down" />}
                    id="reason"
                    value="card"
                  >
                    <Option value="mastercard">
                      <div className="d-flex align-items-center">
                        <img
                          alt=""
                          width="20"
                          height="20"
                          src="/images/mastercard.png"
                          className="mr-8"
                        />
                        <p className="mb-0">
                          Mastercard **** 1648
                          <span className="ant-select-selector-default">(Default)</span>
                        </p>
                      </div>
                    </Option>
                    <Option value="visa">
                      <div className="d-flex align-items-center">
                        <img
                          alt=""
                          width="20"
                          height="20"
                          src="/images/visa.png"
                          className="mr-8"
                        />
                        <p className="mb-0">Visa **** 1264</p>
                      </div>
                    </Option>
                    <Option value="email">
                      <div className="d-flex align-items-center">
                        <img
                          alt=""
                          width="20"
                          height="20"
                          src="/images/paypal.png"
                          className="mr-8"
                        />
                        <p className="mb-0">rodney.harmon@gmail.com</p>
                      </div>
                    </Option>
                    <OptGroup label="Add payment method">
                      <Option value="card">
                        <div className="d-flex align-items-center">
                          <img
                            alt=""
                            width="20"
                            height="20"
                            src="/images/card.png"
                            className="mr-8"
                          />
                          <p className="mb-0">Credit or debit card</p>
                        </div>
                      </Option>
                      <Option value="paypal">
                        <div className="d-flex align-items-center">
                          <img
                            alt=""
                            width="20"
                            height="20"
                            src="/images/paypal.png"
                            className="mr-8"
                          />
                          <p className="mb-0">PayPal</p>
                        </div>
                      </Option>
                    </OptGroup>
                  </Select>
                </Form.Item>
                <Form.Item label="Card Number" htmlFor="card-number">
                  <Input placeholder="0000 0000 0000 0000" id="card-number" />
                </Form.Item>
                <div className="container-two-items">
                  <Form.Item label="Expiration" htmlFor="expiration">
                    <Input placeholder="MM/YY" id="expiration" />
                  </Form.Item>
                  <Form.Item label="CVV" htmlFor="cvv">
                    <Input placeholder="123" id="cvv" />
                  </Form.Item>
                </div>
                <div className="container-two-items mb-8">
                  <Form.Item label="ZIP Code" htmlFor="zip">
                    <Input placeholder="12334" id="zip" />
                  </Form.Item>
                  <Form.Item label="Country/Region" htmlFor="country">
                    <Select
                      showSearch
                      placeholder="Select country/region"
                      className="w-100"
                      id="country"
                      suffixIcon={<SvgIcon icon="arrow-down" />}
                    >
                      <Option value="">Ukraine</Option>
                      <Option value="">United Arab Emirates</Option>
                      <Option value="">United Kingdom</Option>
                      <Option value="">United States</Option>
                      <Option value="">Uruguay</Option>
                    </Select>
                  </Form.Item>
                </div>
              </Form>
            </div>
            <h2 className="personal-information__subtitle mb-8">Additional information</h2>
            <p className="personal-information__text mb-24">
              Let your host know the additional information about you.
            </p>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Address</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Add
                </a>
              </div>
              <p className="personal-information__value personal-information__value--disabled mb-24">
                Not provided
              </p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Name On Driver&apos;s License</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Add
                </a>
              </div>
              <p className="personal-information__value personal-information__value--disabled mb-24">
                Not provided
              </p>
            </div>
            <div className="personal-information__item mb-24 booking-details">
              <div className="personal-information__header-group">
                <h2 className="booking-details__subtitle mb-24">Cancellation policy</h2>
              </div>
              <p className="booking-details__item d-block justify-content-flex-start mb-8">
                <span className="booking-details__info-title mr-4">Strict:</span>
                <span className="booking-details__value">
                  Cancel before 4:00 PM on March 9 and get a 50% refund, minus the service fee.
                </span>
              </p>
              <a href="#" className="main-text-btn d-inline-flex mb-24">
                Read more
              </a>
            </div>
            <p className="personal-information__footer mb-32">
              By selecting the button below, I agree to the{' '}
              <a href="#" className="main-link main-link--small">
                House Rules
              </a>
              ,{' '}
              <a href="#" className="main-link main-link--small">
                Health & Safety
              </a>
              , and{' '}
              <a href="#" className="main-link main-link--small">
                Cancellation Policy
              </a>
              . I also agree to pay the total amount shown, which includes Service Fees.
            </p>
            <Button
              htmlType="button"
              className="main-btn main-btn--primary min-width-160 mb-28"
              disabled
            >
              Request to book
            </Button>
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

export default CheckoutCreditCard;
