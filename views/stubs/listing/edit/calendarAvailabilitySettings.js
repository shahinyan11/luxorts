import React from 'react';
import { Form, Button, Tabs, Dropdown, Select, InputNumber } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import events from '../../shared/Calendar/events';
import BookingCalendarToolbar from '../../shared/Calendar/bookingCalendarToolbar';
import BookingCalendarDate from '../../shared/Calendar/bookingCalendarDate';
import BookingDayEvent from '../../shared/Calendar/bookingDayEvent';
import MainHeader from '../../layout/header';

const { TabPane } = Tabs;
const { Option } = Select;
const localizer = momentLocalizer(moment);
const components = {
  toolbar: BookingCalendarToolbar,
  month: {
    event: BookingDayEvent,
    dateHeader: BookingCalendarDate,
  },
};

const CalendarAvailabilitySettings = () => (
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
                    <h4 className="booking-calendar__panel-title mb-0">Availability settings</h4>
                    <p className="booking-calendar__dates">Jan 13 - Jan 15</p>
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
                    <div className="booking-calendar__panel-section mb-24">
                      <Button
                        htmlType="button"
                        className="main-btn booking-calendar__toggle booking-calendar__toggle--active"
                      >
                        Reservation preferences
                        <SvgIcon icon="arrow-down" className="icon-right" />
                      </Button>
                      <Form.Item
                        label="Advance Notice"
                        htmlFor="advance-notice"
                        className="mb-24 mt-16"
                      >
                        <Select
                          value="Same day"
                          id="advance-notice"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">Same day</Option>
                          <Option value="">Same day</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Guests can book before"
                        htmlFor="time-before"
                        className="mb-24"
                      >
                        <Select
                          value="10:00 AM"
                          id="time-before"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">10:00 AM</Option>
                          <Option value="">11:00 AM</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="How far in advance can guests book?"
                        htmlFor="far-advance"
                        className="mb-16"
                      >
                        <Select
                          value="6 months in advance"
                          id="far-advance"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">6 months in advance</Option>
                          <Option value="">8 months in advance</Option>
                        </Select>
                      </Form.Item>
                      <div className="container-two-items">
                        <Form.Item label="Nights Min" htmlFor="nights-min">
                          <InputNumber
                            min={0}
                            defaultValue={0}
                            value={2}
                            id="nights-min"
                            className="ant-input-number-narrow"
                            controls={{
                              upIcon: <SvgIcon icon="plus-circle" />,
                              downIcon: <SvgIcon icon="minus-circle" />,
                            }}
                          />
                        </Form.Item>
                        <Form.Item label="Nights Max" htmlFor="nights-max">
                          <InputNumber
                            min={0}
                            defaultValue={0}
                            value={0}
                            id="nights-max"
                            className="ant-input-number-narrow"
                            controls={{
                              upIcon: <SvgIcon icon="plus-circle" />,
                              downIcon: <SvgIcon icon="minus-circle" />,
                            }}
                          />
                        </Form.Item>
                      </div>
                      <Form.Item
                        label="Preparation Time"
                        htmlFor="preparation-time"
                        className="mb-16"
                      >
                        <Select
                          value="Block 1 night before and aft..."
                          id="preparation-time"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">Block 1 night before and aft...</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
                <div className="booking-calendar__panel-footer d-flex justify-content-flex-end">
                  <Button htmlType="submit" className="main-btn main-btn--tertiary mr-16">
                    Discard
                  </Button>
                  <Button htmlType="submit" className="main-btn main-btn--primary min-width-120">
                    Save
                  </Button>
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

export default CalendarAvailabilitySettings;
