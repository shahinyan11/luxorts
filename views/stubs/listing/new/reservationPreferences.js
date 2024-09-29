import React, { useState } from 'react';
import { Progress, Form, Button, Select, Radio, InputNumber } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const { Option } = Select;

const ReservationPreferences = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="main-layout">
      <MainHeader isNewListing newListingText="Reservation preferences" />
      <div className="main-layout__content main-layout__content--full-width">
        <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
        <section className="new-listing pt-32">
          <div className="new-listing__container mb-8">
            <h1 className="new-listing__title mb-32">
              Set reservation preferences for your apartment
            </h1>
            <Form layout="vertical" size="large">
              <h2 className="new-listing__subtitle mb-8">
                When do you need to be notified prior to the arrival of the guests?
              </h2>
              <p className="new-listing__description mb-24">
                At least 1-day notice can help you plan for guests&apos; arrival, but you might miss
                out on last-minute trips.
              </p>
              <div className="new-listing__item mb-24">
                <Radio.Group onChange={onChange} value={value} className="mb-24 d-flex flex-column">
                  <Radio value="same-day">Same day</Radio>
                  <Radio value="1">1 day</Radio>
                  <Radio value="2">2 days</Radio>
                  <Radio value="3">3 days</Radio>
                  <Radio value="7">7 days</Radio>
                </Radio.Group>
              </div>
              <h2 className="new-listing__subtitle mb-8">When can guests check in?</h2>
              <p className="new-listing__description mb-24">
                Select a time range when your guests can check in.
              </p>
              <div className="new-listing__item mb-24">
                <div className="container-two-items">
                  <Form.Item label="From" htmlFor="time-from">
                    <Select
                      placeholder="Select time"
                      id="time-from"
                      suffixIcon={<SvgIcon icon="arrow-down" />}
                    >
                      <Option value="">6:00 AM</Option>
                      <Option value="">7:00 AM</Option>
                      <Option value="">8:00 AM</Option>
                      <Option value="">9:00 AM</Option>
                      <Option value="">10:00 AM</Option>
                      <Option value="">11:00 AM</Option>
                      <Option value="">12:00 PM</Option>
                      <Option value="">1:00 PM</Option>
                      <Option value="">2:00 PM</Option>
                      <Option value="">3:00 PM</Option>
                      <Option value="">4:00 PM</Option>
                      <Option value="">5:00 PM</Option>
                      <Option value="">6:00 PM</Option>
                      <Option value="">7:00 PM</Option>
                      <Option value="">8:00 PM</Option>
                      <Option value="">9:00 PM</Option>
                      <Option value="">10:00 PM</Option>
                      <Option value="">11:00 PM</Option>
                      <Option value="">12:00 AM</Option>
                      <Option value="">1:00 AM</Option>
                      <Option value="">2:00 AM</Option>
                      <Option value="">3:00 AM</Option>
                      <Option value="">4:00 AM</Option>
                      <Option value="">5:00 AM</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="To" htmlFor="time-to" className="mb-24">
                    <Select
                      placeholder="Select time"
                      id="time-to"
                      suffixIcon={<SvgIcon icon="arrow-down" />}
                    >
                      <Option value="">6:00 AM</Option>
                      <Option value="">7:00 AM</Option>
                      <Option value="">8:00 AM</Option>
                      <Option value="">9:00 AM</Option>
                      <Option value="">10:00 AM</Option>
                      <Option value="">11:00 AM</Option>
                      <Option value="">12:00 PM</Option>
                      <Option value="">1:00 PM</Option>
                      <Option value="">2:00 PM</Option>
                      <Option value="">3:00 PM</Option>
                      <Option value="">4:00 PM</Option>
                      <Option value="">5:00 PM</Option>
                      <Option value="">6:00 PM</Option>
                      <Option value="">7:00 PM</Option>
                      <Option value="">8:00 PM</Option>
                      <Option value="">9:00 PM</Option>
                      <Option value="">10:00 PM</Option>
                      <Option value="">11:00 PM</Option>
                      <Option value="">12:00 AM</Option>
                      <Option value="">1:00 AM</Option>
                      <Option value="">2:00 AM</Option>
                      <Option value="">3:00 AM</Option>
                      <Option value="">4:00 AM</Option>
                      <Option value="">5:00 AM</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <h2 className="new-listing__subtitle mb-8">How far in advance can guests book?</h2>
              <p className="new-listing__description mb-24">
                Most hosts keep their calendars updated up to 6 months out.
              </p>
              <div className="new-listing__item mb-24">
                <Radio.Group onChange={onChange} value={value} className="mb-4 d-flex flex-column">
                  <Radio value="any-time">Any time</Radio>
                  <Radio value="3-months">3 months in advance</Radio>
                  <Radio value="6-months">6 months in advance</Radio>
                  <Radio value="9-months">9 months in advance</Radio>
                  <Radio value="1-year">1 year</Radio>
                  <Radio value="unavailable">Dates unavailable by default</Radio>
                </Radio.Group>
                <p className="new-listing__caption pl-32 mb-24">
                  Your entire calendar will be blocked by default, which means you&apos;ll have to
                  manually unblock dates to get booked.
                </p>
              </div>
              <h2 className="new-listing__subtitle mb-8">How long can guests stay?</h2>
              <p className="new-listing__description mb-24">
                Short trips can mean more bookings, but you&apos;ll turn over your space more often.
              </p>
              <div className="new-listing__item mb-24">
                <div className="container-two-items">
                  <Form.Item label="Nights Min" htmlFor="nights-min">
                    <InputNumber
                      min={1}
                      defaultValue={1}
                      id="nights-min"
                      className="ant-input-number-wide"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Nights Max" htmlFor="nights-max" className="mb-24">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="nights-max"
                      className="ant-input-number-wide"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <h2 className="new-listing__subtitle mb-8">
                How much time do you need to prepare your space between reservations?
              </h2>
              <p className="new-listing__description mb-24">
                The availability of your listings largely depends on the length of preparation time
                you need between reservations.
              </p>
              <div className="new-listing__item mb-24">
                <Form.Item label="Preparation Time" htmlFor="preparation-time" className="mb-24">
                  <Select
                    placeholder="None"
                    value="None"
                    id="preparation-time"
                    suffixIcon={<SvgIcon icon="arrow-down" />}
                  >
                    <Option value="">None</Option>
                    <Option value="">Block 1 night before and after each reservation</Option>
                    <Option value="">Block 2 nights before and after each reservation</Option>
                  </Select>
                </Form.Item>
              </div>
              <h2 className="new-listing__subtitle mb-8">Booking approval policy</h2>
              <p className="new-listing__description mb-24">
                Select your default booking approval policy.
              </p>
              <div className="new-listing__item mb-24">
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  className="mb-4 d-flex flex-column ant-radio-group-with-captions"
                >
                  <Radio value="instant-book">Instant book</Radio>
                  <p className="new-listing__description mb-16 pl-32">
                    Allows booking immediately without sending a request for approval.
                  </p>
                  <Radio value="24-hour">24 hour review</Radio>
                  <p className="new-listing__description mb-16 pl-32">
                    Allows 24 hours to accept a booking request.
                  </p>
                </Radio.Group>
              </div>
              <h2 className="new-listing__subtitle mb-8">Cancellation policy</h2>
              <p className="new-listing__description mb-24">
                Select your policy for trip cancellations by guests.
              </p>
              <div className="new-listing__item mb-24">
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  className="mb-4 d-flex flex-column ant-radio-group-with-captions"
                >
                  <Radio value="flexible">Flexible</Radio>
                  <p className="new-listing__description mb-16 pl-32">
                    Full refund 1 day prior to arrival.
                  </p>
                  <Radio value="moderate">Moderate</Radio>
                  <p className="new-listing__description mb-16 pl-32">
                    Full refund 5 days prior to arrival.
                  </p>
                  <Radio value="strict">Strict</Radio>
                  <p className="new-listing__description mb-0 pl-32">
                    50% refund up until 1 week prior to arrival.
                  </p>
                </Radio.Group>
              </div>
            </Form>
          </div>
          <div className="new-listing__footer pt-24 pb-24">
            <div className="new-listing__container d-flex justify-content-space-between">
              <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140">
                Back
              </Button>
              <Button
                htmlType="submit"
                className="main-btn main-btn--primary min-width-140 ml-auto"
              >
                Next
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReservationPreferences;
