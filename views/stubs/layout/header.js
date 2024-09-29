import React, { useState } from 'react';
import { Dropdown, Menu, Avatar, Button, Form, Input, DatePicker, InputNumber } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import PropTypes from 'prop-types';

const { RangePicker } = DatePicker;

const MenuComponent = () => (
  <div className="main-header__nav">
    <Menu className="main-header__menu">
      <Menu.Item key="1">
        Messages
        <span className="main-header__menu-counter">2</span>
      </Menu.Item>
      <Menu.Item key="2">
        Notifications
        <span className="main-header__menu-counter">8</span>
      </Menu.Item>
      <Menu.Item key="3">Bookings</Menu.Item>
      <Menu.Item key="4">Favorites</Menu.Item>
    </Menu>
    <Menu className="main-header__menu">
      <Menu.Item key="5">List your property</Menu.Item>
      <Menu.Item key="6">Account settings</Menu.Item>
    </Menu>
    <Menu className="main-header__menu">
      <Menu.Item key="7">Log out</Menu.Item>
    </Menu>
  </div>
);

const MainHeader = ({
  text,
  buttonText,
  isLogin,
  isAuthorized,
  isAvatarUpload,
  isLanding,
  isWithFilter,
  isNewListing,
  newListingText,
  isMainMenu,
  isNarrow,
  isBackButton,
}) => {
  const [setModalVisible] = useState(false);

  return (
    <header className="main-header">
      <div
        /* eslint-disable no-nested-ternary */
        className={
          isWithFilter
            ? 'main-header__container main-header__container--filter'
            : isNarrow
            ? 'main-header__container main-header__container--narrow'
            : 'main-header__container'
        }
        /* eslint-enable no-nested-ternary */
      >
        <a className="main-header__logo" href="/">
          <img src="/images/logo.svg" alt="" width="138" height="32" />
        </a>
        {isWithFilter && (
          <Form layout="vertical" size="large" className="search ml-xl-24 mr-xl-auto">
            <div className="search__location search__location--header">
              <Form.Item htmlFor="location" className="search__item">
                <Input
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  placeholder="Location"
                  id="location"
                  className="search__input"
                />
              </Form.Item>
              <div className="search__location-dropdown" hidden>
                <p className="search__location-title mb-0">Recent searches</p>
                <a href="#" className="search__location-item">
                  <span className="search__location-icon-container">
                    <SvgIcon icon="recent" className="search__location-icon" />
                  </span>
                  London, United Kingdom
                </a>
                <a href="#" className="search__location-item">
                  <span className="search__location-icon-container">
                    <SvgIcon icon="location" className="search__location-icon" />
                  </span>
                  Philadelphia, PA
                </a>
                <a href="#" className="search__location-item">
                  <span className="search__location-icon-container">
                    <SvgIcon icon="location" className="search__location-icon" />
                  </span>
                  Philadelphia County, Philadelphia, PA
                </a>
              </div>
            </div>
            <div className="search__dates search__dates--header">
              <Form.Item htmlFor="select-date">
                <RangePicker
                  clearIcon={<SvgIcon icon="cross" />}
                  suffixIcon={false}
                  separator={false}
                  placeholder={['Check in', 'Check out']}
                  className="w-100"
                  size="large"
                  id="select-date"
                />
              </Form.Item>
            </div>
            <div className="search__guests search__guests--header">
              <Form.Item htmlFor="guests" className="search__item mb-0">
                <Input
                  placeholder="Guests"
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  id="guests"
                  className="search__input"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="search__submit main-btn main-btn--small main-btn--primary main-btn--icon"
              >
                <SvgIcon icon="search" className="icon-right" />
              </Button>
              <div className="search__amount" hidden>
                <div className="search__amount-item mb-20">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Adults</p>
                    <p className="search__amount-description mb-0">Ages 18 or above</p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      value={2}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="search__amount-item mb-20">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Children</p>
                    <p className="search__amount-description mb-0">Ages 2–17</p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="search__amount-item mb-20">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Infants</p>
                    <p className="search__amount-description mb-0">Under 2</p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="search__amount-item mb-0">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Pets</p>
                    <p className="search__amount-description mb-0">
                      If you&apos;re lucky enough to have more than 2 pets with you, be sure to let
                      your host know
                    </p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        )}
        {isLogin && (
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <span className="main-header__caption mb-8 mb-sm-0">{text}</span>
            <Button
              htmlType="button"
              className="main-btn main-btn--secondary main-btn--md main-header__button ml-sm-16 min-width-120"
            >
              {buttonText}
            </Button>
          </div>
        )}
        {isAuthorized && (
          <div className="d-flex flex-wrap justify-content-flex-end align-items-center">
            <a href="#" className="main-btn main-btn--tertiary mb-8 mb-sm-0">
              Switch to hosting
            </a>
            <Button
              htmlType="button"
              className="main-btn main-btn--icon main-btn--medium ml-12 mr-12 main-header__language"
            >
              <SvgIcon icon="globe" className="icon-right" />
            </Button>
            <Dropdown
              overlay={<MenuComponent setModalVisible={() => setModalVisible(true)} />}
              placement="bottomRight"
            >
              {isAvatarUpload ? (
                <Avatar className="ant-avatar--sm" src="/images/avatar.png" />
              ) : (
                <Avatar className="ant-avatar--sm">RH</Avatar>
              )}
            </Dropdown>
          </div>
        )}
        {isLanding && (
          <div className="d-flex flex-wrap flex-xl-nowrap justify-content-flex-end align-items-center min-width-xl-334">
            <a href="#" className="main-btn main-btn--primary main-btn--medium">
              List your property
            </a>
            <Button
              htmlType="button"
              className="main-btn main-btn--icon main-btn--medium ml-12 mr-12 main-header__language"
            >
              <SvgIcon icon="globe" className="icon-right" />
            </Button>
            <a href="#" className="main-link main-link--secondary mr-24">
              Sign Up
            </a>
            <a href="#" className="main-link main-link--secondary">
              Sign In
            </a>
          </div>
        )}
        {isNewListing && (
          <div className="d-flex flex-wrap flex-column flex-sm-row justify-content-space-between align-items-center w-100">
            <p className="text-body-2 mb-0 ml-auto ml-md-24 mb-8 mb-sm-0">{newListingText}</p>
            <Button
              htmlType="button"
              className="main-btn main-btn--tertiary main-btn--medium min-width-120 ml-auto ml-md-0"
            >
              Save and exit
            </Button>
          </div>
        )}
        {isMainMenu && (
          <div className="d-flex flex-wrap flex-sm-nowrap justify-content-flex-end align-items-center w-100">
            <Menu className="main-menu ant-menu--main" mode="horizontal">
              <Menu.Item key="dashboard" className="main-menu__item">
                Dashboard
              </Menu.Item>
              <Menu.Item key="messages" className="main-menu__item">
                Messages
                <span className="main-header__menu-counter ml-4">2</span>
              </Menu.Item>
              <Menu.Item key="bookings" className="main-menu__item">
                Bookings
              </Menu.Item>
              <Menu.Item key="calendar" className="main-menu__item">
                Calendar
              </Menu.Item>
              <Menu.Item key="listings" className="main-menu__item">
                Listings
              </Menu.Item>
              <Menu.Item key="reviews" className="main-menu__item">
                Reviews
              </Menu.Item>
              <Menu.Item key="reports" className="main-menu__item">
                Reports
              </Menu.Item>
              <Menu.Item key="help" className="main-menu__item">
                Help
              </Menu.Item>
            </Menu>
            <div className="main-header__profile">
              <a
                href="#"
                className="main-header__profile-notification main-header__profile-notification--active mr-24"
              >
                <SvgIcon icon="notification" className="main-header__notification-icon" />
              </a>
              <a href="#">
                <img alt="" width="40" height="40" src="/images/avatar.png" />
              </a>
            </div>
          </div>
        )}
        {isBackButton && (
          <a
            href="#"
            className="main-btn main-btn--medium main-btn--tertiary mb-8 mb-sm-0 min-width-120"
          >
            Back
          </a>
        )}
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  isLogin: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  isAvatarUpload: PropTypes.bool,
  isLanding: PropTypes.bool,
  isWithFilter: PropTypes.bool,
  isNewListing: PropTypes.bool,
  newListingText: PropTypes.string,
  isMainMenu: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isBackButton: PropTypes.bool,
};

MainHeader.defaultProps = {
  text: 'Already have an account?',
  buttonText: 'Sign In',
  isLogin: false,
  isAuthorized: false,
  isAvatarUpload: false,
  isLanding: false,
  isWithFilter: false,
  isNewListing: false,
  newListingText: '',
  isMainMenu: false,
  isNarrow: false,
  isBackButton: false,
};

export default MainHeader;
