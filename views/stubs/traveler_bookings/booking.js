import React from 'react';
import { Button, Input, Form, Checkbox, Dropdown, Menu, Tag } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const Booking = () => (
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
        <div className="booking__items">
          <section className="booking-card">
            <img
              alt=""
              width="274"
              height="180"
              src="/images/booking-00.jpg"
              className="booking-card__img"
            />
            <div className="booking-card__content">
              <div className="booking-card__info">
                <h2 className="booking-card__title mb-0">Charming and comfortable house</h2>
                <p className="booking-card__description mb-16">Philadelphia, PA, United States</p>
                <p className="booking-card__price mb-0">
                  <span className="booking-card__accent">$1,620</span> total for 23 nights
                  <SvgIcon icon="dot" className="booking-card__dot" />2 guests
                </p>
              </div>
              <div className="booking-card__details">
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu className="booking-card__menu width-180">
                      <Menu.Item>View Details</Menu.Item>
                      <Menu.Item>Cancel Booking</Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    htmlType="button"
                    className="booking-card__menu-btn main-btn main-btn--icon"
                  >
                    <SvgIcon icon="three-dots" className="icon-right" />
                  </Button>
                </Dropdown>
                <Tag className="tag tag--warning">Pending</Tag>
                <p className="booking-card__date mb-0">March 16 - April 7, 2022</p>
              </div>
            </div>
          </section>
          <section className="booking-card">
            <img
              alt=""
              width="274"
              height="180"
              src="/images/booking-01.jpg"
              className="booking-card__img"
            />
            <div className="booking-card__content">
              <div className="booking-card__info">
                <h2 className="booking-card__title mb-0">
                  Luxury Bi-Level in Heart of Center City
                </h2>
                <p className="booking-card__description mb-16">Philadelphia, PA, United States</p>
                <p className="booking-card__price mb-0">
                  <span className="booking-card__accent">$1,620</span> total for 23 nights
                  <SvgIcon icon="dot" className="booking-card__dot" />2 guests
                </p>
              </div>
              <div className="booking-card__details">
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu className="booking-card__menu width-180">
                      <Menu.Item>View Details</Menu.Item>
                      <Menu.Item>Cancel Booking</Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    htmlType="button"
                    className="booking-card__menu-btn main-btn main-btn--icon"
                  >
                    <SvgIcon icon="three-dots" className="icon-right" />
                  </Button>
                </Dropdown>
                <Tag className="tag tag--success">Upcomings</Tag>
                <p className="booking-card__date mb-0">March 16 - April 7, 2022</p>
              </div>
            </div>
          </section>
          <section className="booking-card">
            <img
              alt=""
              width="274"
              height="180"
              src="/images/booking-02.jpg"
              className="booking-card__img"
            />
            <div className="booking-card__content">
              <div className="booking-card__info">
                <h2 className="booking-card__title mb-0">
                  Sosuite | Art deco dream in University City
                </h2>
                <p className="booking-card__description mb-16">Philadelphia, PA, United States</p>
                <p className="booking-card__price mb-0">
                  <span className="booking-card__accent">$1,620</span> total for 23 nights
                  <SvgIcon icon="dot" className="booking-card__dot" />2 guests
                </p>
              </div>
              <div className="booking-card__details">
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu className="booking-card__menu width-180">
                      <Menu.Item>View Details</Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    htmlType="button"
                    className="booking-card__menu-btn main-btn main-btn--icon"
                  >
                    <SvgIcon icon="three-dots" className="icon-right" />
                  </Button>
                </Dropdown>
                <Tag className="tag tag--primary">Current</Tag>
                <p className="booking-card__date mb-0">March 16 - April 7, 2022</p>
              </div>
            </div>
          </section>
          <section className="booking-card">
            <img
              alt=""
              width="274"
              height="180"
              src="/images/booking-03.jpg"
              className="booking-card__img"
            />
            <div className="booking-card__content">
              <div className="booking-card__info">
                <h2 className="booking-card__title mb-0">Pink Modern Apartment</h2>
                <p className="booking-card__description mb-16">Philadelphia, PA, United States</p>
                <p className="booking-card__price mb-0">
                  <span className="booking-card__accent">$1,620</span> total for 23 nights
                  <SvgIcon icon="dot" className="booking-card__dot" />2 guests
                </p>
              </div>
              <div className="booking-card__details">
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu className="booking-card__menu width-180">
                      <Menu.Item>View Details</Menu.Item>
                      <Menu.Item>Leave A Review</Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    htmlType="button"
                    className="booking-card__menu-btn main-btn main-btn--icon"
                  >
                    <SvgIcon icon="three-dots" className="icon-right" />
                  </Button>
                </Dropdown>
                <Tag className="tag tag--cancel">Completed</Tag>
                <p className="booking-card__date mb-0">March 16 - April 7, 2022</p>
              </div>
            </div>
          </section>
          <section className="booking-card">
            <img
              alt=""
              width="274"
              height="180"
              src="/images/booking-04.jpg"
              className="booking-card__img"
            />
            <div className="booking-card__content">
              <div className="booking-card__info">
                <h2 className="booking-card__title mb-0">Sweet home with private entrance</h2>
                <p className="booking-card__description mb-16">Philadelphia, PA, United States</p>
                <p className="booking-card__price mb-0">
                  <span className="booking-card__accent">$1,620</span> total for 23 nights
                  <SvgIcon icon="dot" className="booking-card__dot" />2 guests
                </p>
              </div>
              <div className="booking-card__details">
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu className="booking-card__menu width-180">
                      <Menu.Item>View Details</Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    htmlType="button"
                    className="booking-card__menu-btn main-btn main-btn--icon"
                  >
                    <SvgIcon icon="three-dots" className="icon-right" />
                  </Button>
                </Dropdown>
                <Tag className="tag tag--draft">Cancelled</Tag>
                <p className="booking-card__date mb-0">March 16 - April 7, 2022</p>
              </div>
            </div>
          </section>
          <section className="booking-card">
            <img
              alt=""
              width="274"
              height="180"
              src="/images/booking-05.jpg"
              className="booking-card__img"
            />
            <div className="booking-card__content">
              <div className="booking-card__info">
                <h2 className="booking-card__title mb-0">Sweet Oasis in Historic Philly</h2>
                <p className="booking-card__description mb-16">Philadelphia, PA, United States</p>
                <p className="booking-card__price mb-0">
                  <span className="booking-card__accent">$1,620</span> total for 23 nights
                  <SvgIcon icon="dot" className="booking-card__dot" />2 guests
                </p>
              </div>
              <div className="booking-card__details">
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu className="booking-card__menu width-180">
                      <Menu.Item>View Details</Menu.Item>
                    </Menu>
                  }
                >
                  <Button
                    htmlType="button"
                    className="booking-card__menu-btn main-btn main-btn--icon"
                  >
                    <SvgIcon icon="three-dots" className="icon-right" />
                  </Button>
                </Dropdown>
                <Tag className="tag tag--error">Rejected</Tag>
                <p className="booking-card__date mb-0">March 16 - April 7, 2022</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
);

export default Booking;
