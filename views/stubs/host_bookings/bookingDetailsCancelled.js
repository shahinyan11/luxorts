import React from 'react';
import { Carousel, Tag, Button, Avatar } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const BookingDetailsCancelled = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="booking-details">
        <div className="booking-details__container">
          <div className="booking-details__column">
            <ul className="breadcrumbs mt-32 mb-16">
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Bookings
                </a>
                <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Charming and comfortable house
                </a>
              </li>
            </ul>
            <h1 className="booking-details__title mb-4">Charming and comfortable house</h1>
            <p className="booking-details__location mb-16">Philadelphia, PA, United States</p>
            <Carousel className="booking-details__slider carousel mb-32">
              <div className="carousel__slide">
                <Tag className="carousel__tag tag tag--draft">Cancelled</Tag>
                <img
                  alt=""
                  width="558"
                  height="364"
                  className="carousel__image"
                  src="/images/booking-details-03.jpg"
                />
              </div>
              <div className="carousel__slide">
                <Tag className="carousel__tag tag tag--warning">Pending</Tag>
                <img
                  alt=""
                  width="558"
                  height="364"
                  className="carousel__image"
                  src="/images/booking-details-00.jpg"
                />
              </div>
              <div className="carousel__slide">
                <Tag className="carousel__tag tag tag--success">Upcoming</Tag>
                <img
                  alt=""
                  width="558"
                  height="364"
                  className="carousel__image"
                  src="/images/booking-details-01.jpg"
                />
              </div>
              <div className="carousel__slide">
                <Tag className="carousel__tag tag tag--primary">Current</Tag>
                <img
                  alt=""
                  width="558"
                  height="364"
                  className="carousel__image"
                  src="/images/booking-details-02.jpg"
                />
              </div>
              <div className="carousel__slide">
                <Tag className="carousel__tag tag tag--cancel">Completed</Tag>
                <img
                  alt=""
                  width="558"
                  height="364"
                  className="carousel__image"
                  src="/images/booking-details-00.jpg"
                />
              </div>
              <div className="carousel__slide">
                <Tag className="carousel__tag tag tag--error">Rejected</Tag>
                <img
                  alt=""
                  width="558"
                  height="364"
                  className="carousel__image"
                  src="/images/booking-details-04.jpg"
                />
              </div>
            </Carousel>
            <h2 className="booking-details__subtitle mb-24">Booking details</h2>
            <div className="booking-details__info pb-16 mb-16">
              <div className="booking-details__note">
                <p className="booking-details__item mb-8">
                  <span className="booking-details__reason fw-600">Cancelled by You</span>
                  <span className="booking-details__reason">March 9, 2022</span>
                </p>
                <p className="booking-details__value mb-0">
                  <b className="fw-600">Cancellation reason: </b>
                  My plans have changed. So I need to cancel the booking. Sorry!
                </p>
              </div>
            </div>
            <div className="booking-details__info pb-16 mb-16">
              <p className="booking-details__item mb-0">
                <span className="booking-details__info-title">Booking code</span>
                <span className="booking-details__value">HMPW5K34FR</span>
              </p>
            </div>
            <div className="booking-details__info pb-16 mb-16">
              <p className="booking-details__item mb-16">
                <span className="booking-details__info-title">Check in</span>
                <span className="booking-details__value">Wed, March 16, 2022 (After 4:00 PM)</span>
              </p>
              <p className="booking-details__item mb-0">
                <span className="booking-details__info-title">Check out</span>
                <span className="booking-details__value">Thu, April 7, 2022 (11:00 AM)</span>
              </p>
            </div>
            <div className="booking-details__info pb-16 mb-16">
              <p className="booking-details__item mb-0">
                <span className="booking-details__info-title">Guests</span>
                <span className="booking-details__value">2 guests</span>
              </p>
            </div>
            <div className="booking-details__info pb-32 mb-32">
              <p className="booking-details__item mb-0">
                <span className="booking-details__info-title">Address</span>
                <span className="booking-details__value">
                  1529 Walnut St, Philadelphia, PA 19102, USA
                </span>
              </p>
            </div>
            <h2 className="booking-details__subtitle mb-24">Price breakdown</h2>
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
            <div className="booking-details__info pb-32 mb-32">
              <p className="booking-details__item mb-0">
                <span className="booking-details__total">Total</span>
                <span className="booking-details__total">$1,620</span>
              </p>
            </div>
            <h2 className="booking-details__subtitle mb-24">Guest</h2>
            <div className="booking-details__host mb-24">
              <a href="#">
                <Avatar className="ant-avatar--sm mb-8" src="/images/cameron.png" />
              </a>
              <div className="booking-details__host-column">
                <p className="booking-details__name mb-0">
                  <a href="#">Darrell Steward</a>
                </p>
                <p className="booking-details__date mb-0">Joined in October 2018</p>
              </div>
            </div>
            <div className="booking-details__info pb-32 mb-32">
              <p className="booking-details__item mb-16">
                <span className="booking-details__info-title">Email</span>
                <span className="booking-details__email">
                  <a href="mailto:darrell.steward@gmail.com" className="main-text-btn fw-400">
                    darrell.steward@gmail.com
                  </a>
                </span>
              </p>
              <p className="booking-details__item mb-0">
                <span className="booking-details__info-title">Phone number</span>
                <span className="booking-details__value">
                  <a href="tel:+18884521505" className="booking-details__phone">
                    +1 888-452-1505
                  </a>
                </span>
              </p>
            </div>
            <h2 className="booking-details__subtitle mb-24">Cancellation policy</h2>
            <p className="booking-details__item d-block justify-content-flex-start mb-8">
              <span className="booking-details__info-title mr-4">Strict:</span>
              <span className="booking-details__value">
                Cancel before 4:00 PM on March 9 and get a 50% refund, minus the service fee.
              </span>
            </p>
            <a href="#" className="main-text-btn d-inline-flex mb-32">
              Read more
            </a>
          </div>
          <img
            alt=""
            className="booking-details__map"
            width="610"
            height="856"
            src="/images/booking-details-map.jpg"
          />
        </div>
        <div className="booking-details__footer d-flex">
          <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140 mr-16">
            Reject booking
          </Button>
          <Button htmlType="button" className="main-btn main-btn--primary min-width-140">
            Accept booking
          </Button>
        </div>
      </section>
    </div>
  </div>
);

export default BookingDetailsCancelled;
