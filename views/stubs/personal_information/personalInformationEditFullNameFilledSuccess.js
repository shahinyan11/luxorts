import React from 'react';
import { Button } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const PersonalInformationEditFullNameFilled = () => (
  <div className="main-layout">
    <MainHeader isAuthorized />
    <div className="main-layout__content">
      <div className="flash-message flash-message--success width-320 main-layout__message">
        <SvgIcon icon="checked" className="flash-message__left-icon" />
        <span>Your full name has been updated</span>
        <Button htmlType="button" className="flash-message__right-icon">
          <SvgIcon icon="cross" />
        </Button>
      </div>
      <div className="personal-information">
        <ul className="breadcrumbs mt-32 mb-16">
          <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">
              Account settings
            </a>
            <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />
          </li>
          <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">
              Personal information
            </a>
          </li>
        </ul>
        <h1 className="text-display-2 mb-lg-64 mb-32">Personal information</h1>
        <div className="personal-information__content">
          <div className="personal-information__user">
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Full Name</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Edit
                </a>
              </div>
              <p className="personal-information__value mb-24">Rodney Cooper</p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Gender</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Add
                </a>
              </div>
              <p className="personal-information__value personal-information__value--disabled mb-24">
                Not specified
              </p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Date Of Birth</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Edit
                </a>
              </div>
              <p className="personal-information__value mb-24">March 16, 1994</p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">About</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Add
                </a>
              </div>
              <p className="personal-information__value personal-information__value--disabled mb-24">
                Not provided
              </p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Email</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Edit
                </a>
              </div>
              <p className="personal-information__value mb-24">rodney.harmon@gmail.com</p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Phone Number</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Edit
                </a>
              </div>
              <p className="personal-information__value mb-24">+1 888-452-1505</p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Address</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Add
                </a>
              </div>
              <p className="personal-information__value personal-information__value--disabled mb-24">
                Not provided
              </p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Name On Driver&apos;s License</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Add
                </a>
              </div>
              <p className="personal-information__value personal-information__value--disabled mb-24">
                Not provided
              </p>
            </div>
          </div>
          <div className="personal-information__note mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
            <span className="personal-information__icon-container mb-16">
              <SvgIcon icon="profile" className="personal-information__icon" />
            </span>
            <h2 className="personal-information__subtitle text-subheader-2 mb-4">
              What info can be edited?
            </h2>
            <p className="personal-information__text text-body mb-0">
              Some personal details and contact info can be edited, but we may ask you to verify
              your identity the next time you book or create a listing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PersonalInformationEditFullNameFilled;
