import React from 'react';
import { Button, Input, Form, Dropdown, Checkbox, Menu } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const BookingSearchNoResults = () => (
  <div className="main-layout">
    <MainHeader isAuthorized isAvatarUpload />
    <div className="main-layout__content">
      <section className="booking">
        <div className="booking__header mb-24">
          <h1 className="booking__title">
            Bookings
            <span className="booking__counter"> 6</span>
          </h1>
          <Dropdown
            placement="bottomRight"
            overlay={
              <Menu className="booking__sort-dropdown width-180">
                <Menu.Item>None</Menu.Item>
                <Menu.Item>Listing title</Menu.Item>
                <Menu.Item>Location</Menu.Item>
                <Menu.Item>Status</Menu.Item>
                <Menu.Item>Check in date</Menu.Item>
                <Menu.Item>Check out date</Menu.Item>
                <Menu.Item>Total price</Menu.Item>
              </Menu>
            }
          >
            <div className="booking__sorter">
              <div className="booking__buttons">
                <Button htmlType="button" className="booking__sort main-btn main-btn--icon">
                  <SvgIcon icon="triangle-up" className="booking__sort-icon" />
                </Button>
                <Button htmlType="button" className="booking__sort main-btn main-btn--icon">
                  <SvgIcon icon="triangle-down" className="booking__sort-icon" />
                </Button>
              </div>
              <span className="booking__sort-text">Sort by</span>
              <Button htmlType="button" className="booking__sort-btn main-btn main-btn--medium">
                Check in date
                <SvgIcon icon="arrow-down" className="booking__sort-btn-icon icon-right" />
              </Button>
            </div>
          </Dropdown>
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
        <div className="booking__empty pt-64 pt-md-128 pb-64 pb-md-128">
          <img alt="" src="/images/no-results.png" width="136" height="136" className="mb-24" />
          <p className="booking__text mb-32">No results found.</p>
        </div>
      </section>
    </div>
  </div>
);

export default BookingSearchNoResults;
