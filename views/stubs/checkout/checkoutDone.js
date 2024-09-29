import React from 'react';
import { Button, Tag } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const CheckoutDone = () => (
  <div className="main-layout">
    <MainHeader isNarrow />
    <div className="main-layout__content">
      <div className="personal-information pt-32">
        <div className="personal-information__content">
          <div className="personal-information__user">
            <div className="d-flex flex-column align-items-center text-align-center mt-md-48">
              <img
                alt=""
                width="136"
                height="136"
                src="/images/upload-done.png"
                className="mb-32"
              />
              <h1 className="text-display-2 mb-8">Your booking is confirmed!</h1>
              <p className="text-body mb-32">
                You successfully created your booking. We emailed the details to
                <span className="fw-600 ml-4 mr-4">rodney.harmon@gmail.com.</span>
                Go to bookings to view your new booking details.
              </p>
              <Button htmlType="button" className="main-btn main-btn--primary min-width-140">
                Go to Bookings
              </Button>
            </div>
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
              <div className="booking-details__info pb-8 mb-16">
                <p className="booking-details__item mb-8">
                  <span className="booking-details__value-title">Check in</span>
                  <span className="booking-details__value">March 16</span>
                </p>
                <p className="booking-details__item mb-8">
                  <span className="booking-details__value-title">Check out</span>
                  <span className="booking-details__value">April 7</span>
                </p>
                <p className="booking-details__item mb-8">
                  <span className="booking-details__value-title">Guests</span>
                  <span className="booking-details__value">2 guests</span>
                </p>
              </div>
              <div className="booking-details__info pb-16 mb-16">
                <p className="booking-details__item mb-0">
                  <span className="booking-details__total">Total</span>
                  <span className="booking-details__total d-flex align-items-center">
                    <Tag className="tag tag--success mr-8">Paid</Tag>
                    $1,620
                  </span>
                </p>
              </div>
              <p className="booking-details__item mb-0">
                <span className="booking-details__value-title">Booking code</span>
                <span className="booking-details__value">HMPW5K34FR</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default CheckoutDone;
