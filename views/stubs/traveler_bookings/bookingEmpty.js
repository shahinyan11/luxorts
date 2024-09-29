import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const BookingEmpty = () => (
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
        <div className="booking__empty pt-64 pt-md-128 pb-64 pb-md-128">
          <img alt="" src="/images/empty.png" width="136" height="136" className="mb-24" />
          <p className="booking__text mb-32">No bookings yet.</p>
          <Button htmlType="button" className="main-btn main-btn--primary min-width-140">
            Start searching
          </Button>
        </div>
      </section>
    </div>
  </div>
);

export default BookingEmpty;
