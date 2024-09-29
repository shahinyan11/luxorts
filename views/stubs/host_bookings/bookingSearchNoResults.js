import React from 'react';
import { Button, Input, Form, Dropdown, Checkbox } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const BookingSearchNoResults = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <section className="listing">
        <div className="listing__header mb-24">
          <h1 className="listing__title">
            Bookings
            <span className="listing__counter"> 0</span>
          </h1>
        </div>
        <div className="table-head d-flex mb-24">
          <Form layout="inline" size="middle">
            <Form.Item>
              <Input.Search
                allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                className="max-width-364"
                enterButton={<SvgIcon icon="search" />}
                placeholder="Search booking"
                value="Qwerty"
              />
            </Form.Item>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Check in - Check out
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="table-head__dropdown-content min-width-360">
                  <div className="table-head__checkboxes d-flex flex-column">
                    <Checkbox>Philadelphia, PA, United States</Checkbox>
                    <Checkbox checked>Los Angeles, CA, United States</Checkbox>
                    <Checkbox checked>Chicago, IL, United States</Checkbox>
                    <Checkbox>Seattle, WA, United States</Checkbox>
                    <Checkbox>Phoenix, AZ, United States</Checkbox>
                  </div>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
                Location
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="table-head__dropdown-content">
                  <div className="table-head__checkboxes d-flex flex-column">
                    <Checkbox checked>Pending</Checkbox>
                    <Checkbox checked>Upcoming</Checkbox>
                    <Checkbox>Current</Checkbox>
                    <Checkbox>Completed</Checkbox>
                    <Checkbox>Cancelled</Checkbox>
                    <Checkbox>Rejected</Checkbox>
                  </div>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
                Status
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
          </Form>
        </div>
        <div className="listing__empty pt-64 pt-md-128 pb-64 pb-md-128">
          <img alt="" src="/images/no-results.png" width="136" height="136" className="mb-24" />
          <p className="listing__text mb-32">No results found.</p>
        </div>
      </section>
    </div>
  </div>
);

export default BookingSearchNoResults;
