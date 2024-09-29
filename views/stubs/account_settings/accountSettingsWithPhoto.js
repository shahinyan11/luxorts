import React, { useState } from 'react';
import { Avatar, Dropdown, Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';
import UploadProfileImage from '../shared/UploadProfileImage';

const UploadControls = () => (
  <ul className="account-controls">
    <li className="account-controls__item">
      <a href="#" className="account-controls__link">
        Change
      </a>
    </li>
    <li className="account-controls__item">
      <a href="#" className="account-controls__link">
        Remove
      </a>
    </li>
  </ul>
);

const AccountSettingsWithPhoto = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="main-layout">
      <MainHeader isAuthorized />
      <div className="main-layout__content">
        <div className="flash-message flash-message--success width-320 main-layout__message">
          <SvgIcon icon="checked" className="flash-message__left-icon" />
          <span>Your profile image has been uploaded</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <div className="account">
          <div className="d-flex justify-content-space-between align-items-center mb-80">
            <h1 className="text-display-2">Account settings</h1>
            <a href="#" className="main-btn main-btn--secondary min-width-140">
              Go to profile
            </a>
          </div>
          <div className="account__user-header d-flex flex-column align-items-center mb-64">
            <div className="account__user-avatar mb-16">
              <Avatar className="ant-avatar--xxxl" src="/images/avatar.png" />
              <Dropdown
                overlay={<UploadControls setModalVisible={() => setModalVisible(true)} />}
                placement="bottomCenter"
              >
                <Button
                  htmlType="button"
                  className="account__user-upload"
                  onClick={setModalVisible}
                >
                  <SvgIcon icon="camera" className="account__user-icon" />
                </Button>
              </Dropdown>
            </div>
            <p className="account__user-name mb-4 text-headline-2">Rodney Harmon</p>
            <p className="account__user-mail mb-0 text-body">rodney.harmon@gmail.com</p>
          </div>
        </div>
        <ul className="account-menu mb-40 mb-md-80 mb-lg-160">
          <li className="account-menu__item d-flex">
            <a href="#" className="account-menu__link d-flex align-items-flex-start">
              <span className="account-menu__icon-container">
                <SvgIcon icon="profile" className="account-menu__icon" />
              </span>
              <div className="account-menu__content">
                <h2 className="account-menu__title">Personal information</h2>
                <p className="account-menu__text">
                  Provide personal details and how we can reach you.
                </p>
              </div>
              <SvgIcon icon="arrow-right-long" className="account-menu__arrow" />
            </a>
          </li>
          <li className="account-menu__item d-flex">
            <a href="#" className="account-menu__link d-flex align-items-flex-start">
              <span className="account-menu__icon-container">
                <SvgIcon icon="user-shield" className="account-menu__icon" />
              </span>
              <div className="account-menu__content">
                <h2 className="account-menu__title">Login & security</h2>
                <p className="account-menu__text">Update your password and secure your account.</p>
              </div>
              <SvgIcon icon="arrow-right-long" className="account-menu__arrow" />
            </a>
          </li>
          <li className="account-menu__item d-flex">
            <a href="#" className="account-menu__link d-flex align-items-flex-start">
              <span className="account-menu__icon-container">
                <SvgIcon icon="bank-card" className="account-menu__icon" />
              </span>
              <div className="account-menu__content">
                <h2 className="account-menu__title">Payments & payouts</h2>
                <p className="account-menu__text">
                  Review payments, payouts, coupons, gift cards, and taxes.
                </p>
              </div>
              <SvgIcon icon="arrow-right-long" className="account-menu__arrow" />
            </a>
          </li>
          <li className="account-menu__item">
            <a href="#" className="account-menu__link d-flex align-items-flex-start">
              <span className="account-menu__icon-container">
                <SvgIcon icon="guests" className="account-menu__icon" />
              </span>
              <div className="account-menu__content">
                <h2 className="account-menu__title">Invite friends</h2>
                <p className="account-menu__text">Invite friends to join Luxorts community.</p>
              </div>
              <SvgIcon icon="arrow-right-long" className="account-menu__arrow" />
            </a>
          </li>
        </ul>
      </div>
      <MainFooter isAccount />
      <UploadProfileImage visible={modalVisible} />
    </div>
  );
};

export default AccountSettingsWithPhoto;
