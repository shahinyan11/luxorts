import React from 'react';
import { Form, Button, Tabs, Dropdown } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import events from '../../shared/Calendar/events';
import BookingCalendarToolbar from '../../shared/Calendar/bookingCalendarToolbar';
import BookingCalendarDate from '../../shared/Calendar/bookingCalendarDate';
import BookingDayEvent from '../../shared/Calendar/bookingDayEvent';
import MainHeader from '../../layout/header';

const { TabPane } = Tabs;
const localizer = momentLocalizer(moment);
const components = {
  toolbar: BookingCalendarToolbar,
  month: {
    event: BookingDayEvent,
    dateHeader: BookingCalendarDate,
  },
};

const CalendarGuest = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Property type" />
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
      <Tabs
        defaultActiveKey="11"
        className="w-100 max-width-1440 mr-auto ml-auto"
        tabPosition="left"
      >
        <TabPane tab="Property type" key="1" />
        <TabPane tab="Accommodation" key="2" />
        <TabPane tab="Location" key="3" />
        <TabPane tab="Amenities" key="4" />
        <TabPane tab="Capabilities" key="5" />
        <TabPane tab="Services" key="6" />
        <TabPane tab="Photos" key="7" />
        <TabPane tab="Description" key="8" />
        <TabPane tab="House rules" key="9" />
        <TabPane tab="Reservation preferences" key="10" />
        <TabPane tab="Availability & pricing" key="11">
          <section className="new-listing pt-32">
            <div className="new-listing__container new-listing__container--full-width mb-8">
              <h1 className="new-listing__title mb-8">Set availability & pricing</h1>
              <p className="new-listing__description mb-32">
                Manage availability and pricing for your place.
              </p>
            </div>
            <div className="booking-calendar booking-calendar--tab">
              <Calendar
                className="booking-calendar__container mb-32"
                events={events}
                localizer={localizer}
                components={components}
                date={new Date(2022, 3, 5)}
              />
              <div className="booking-calendar__panel">
                <div className="booking-calendar__panel-header">
                  <div className="booking-calendar__panel-column">
                    <h4 className="booking-calendar__panel-title mb-0">Esther Howard</h4>
                    <p className="mb-0">
                      <a href="#" className="main-link mr-16">
                        View profile
                      </a>
                      <a href="#" className="main-link">
                        Message
                      </a>
                    </p>
                  </div>
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--icon booking-calendar__panel-close"
                  >
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
                <div className="booking-calendar__panel-content">
                  <Form layout="vertical" size="large">
                    <div className="d-flex justify-content-space-between mb-24">
                      <p className="booking-calendar__label mb-0 mr-16">Check in</p>
                      <p className="booking-calendar__value mb-0">January 20</p>
                    </div>
                    <div className="d-flex justify-content-space-between mb-24">
                      <p className="booking-calendar__label mb-0 mr-16">Check out</p>
                      <p className="booking-calendar__value mb-0">January 22</p>
                    </div>
                    <div className="d-flex justify-content-space-between mb-24">
                      <p className="booking-calendar__label mb-0 mr-16">Total coming</p>
                      <p className="booking-calendar__value mb-0">2 adults</p>
                    </div>
                    <div className="d-flex justify-content-space-between mb-24">
                      <p className="booking-calendar__label mb-0 mr-16">Total payout</p>
                      <p className="booking-calendar__value mb-0">$396.8</p>
                    </div>
                    <div className="d-flex justify-content-space-between mb-4">
                      <p className="booking-calendar__label mb-0 mr-16">Private note</p>
                      <a href="#" className="main-link">
                        Add
                      </a>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </TabPane>
        <TabPane tab="Pricing & discounts" key="12" />
      </Tabs>
    </div>
  </div>
);

export default CalendarGuest;
