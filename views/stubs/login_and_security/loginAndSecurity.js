import React from 'react';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const LoginAndSecurity = () => (
  <div className="main-layout">
    <MainHeader isAuthorized />
    <div className="main-layout__content">
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
              Login & security
            </a>
          </li>
        </ul>
        <h1 className="text-display-2 mb-lg-64 mb-32">Login & security</h1>
        <div className="personal-information__content">
          <div className="personal-information__user">
            <div className="personal-information__item mb-24">
              <div className="personal-information__header d-flex justify-content-space-between mb-8">
                <p className="personal-information__label mb-0">Password</p>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2 ml-auto mr-16"
                >
                  Recover
                </a>
                <a
                  href="#"
                  className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                >
                  Update
                </a>
              </div>
              <p className="personal-information__value mb-24">Last updated a year ago</p>
            </div>
          </div>
          <div className="personal-information__note mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
            <span className="personal-information__icon-container mb-16">
              <SvgIcon icon="user-shield" className="personal-information__icon" />
            </span>
            <h2 className="personal-information__subtitle text-subheader-2 mb-4">
              Login & security
            </h2>
            <p className="personal-information__text text-body mb-0">
              Settings and recommendations to help you keep your account secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginAndSecurity;
