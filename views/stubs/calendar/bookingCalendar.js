import React from 'react';
import { Button, Dropdown } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import events from '../shared/Calendar/events';
import BookingCalendarToolbar from '../shared/Calendar/bookingCalendarToolbar';
import BookingCalendarDate from '../shared/Calendar/bookingCalendarDate';
import BookingDayEvent from '../shared/Calendar/bookingDayEvent';
import MainHeader from '../layout/header';

const localizer = momentLocalizer(moment);

const components = {
  toolbar: BookingCalendarToolbar,
  month: {
    event: BookingDayEvent,
    dateHeader: BookingCalendarDate,
  },
};

const BookingCalendar = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content main-layout__content--full-width">
      <div className="listing-panel">
        <div className="listing-panel__container">
          <Dropdown
            placement="bottomLeft"
            overlay={
              <ul className="listing-panel__list">
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-01.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">Charming and comfortable house</p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-02.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">
                    Luxury Bi-Level in Heart of Center City
                  </p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-03.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">
                    Sosuite | Art deco dream in University City
                  </p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-04.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">Pink Modern Apartment</p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-05.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">Sweet home with private entrance</p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-06.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">Pink Modern Apartment</p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-07.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">
                    Luxury Bi-Level in Heart of Center City
                  </p>
                </li>
                <li className="listing-panel__item">
                  <img
                    alt=""
                    width="68"
                    height="48"
                    src="/images/housing-preview-08.png"
                    className="listing-panel__image"
                  />
                  <p className="listing-panel__name mb-0">Sweet home with private entrance</p>
                </li>
              </ul>
            }
          >
            <div className="listing-panel__column">
              <img
                alt=""
                width="68"
                height="48"
                src="/images/housing-preview-01.png"
                className="listing-panel__image"
              />
              <div className="listing-panel__content">
                <h2 className="listing-panel__title mb-0">Charming and comfortable house</h2>
                <p className="listing-panel__text mb-0">Entire apartment in Center City</p>
              </div>
              <Button
                htmlType="button"
                className="listing-panel__btn main-btn main-btn--medium main-btn--tertiary main-btn--icon"
              >
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </div>
          </Dropdown>
          <Button htmlType="button" className="main-btn main-btn--primary main-btn--medium">
            Listing preview
          </Button>
        </div>
      </div>
      <section className="calendar-header pt-32">
        <div className="calendar-header__container">
          <h1 className="calendar-header__title mb-8">Bookings calendar</h1>
          <p className="calendar-header__description mb-32">Explore your bookings calendar.</p>
        </div>
        <div className="booking-calendar">
          <Calendar
            className="booking-calendar__container mb-32"
            events={events}
            localizer={localizer}
            components={components}
            date={new Date(2022, 3, 5)}
          />
        </div>
      </section>
    </div>
  </div>
);

export default BookingCalendar;
