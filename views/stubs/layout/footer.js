import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const MainFooter = ({ isRegistration, isAccount, isFooterMenu, isLanding }) => (
  <footer className="main-footer">
    {isFooterMenu && (
      <div className="main-footer__wrapper main-footer__wrapper--menu">
        <div className="main-footer__container">
          <a className="main-footer__logo" href="/">
            <img src="/images/logo.svg" alt="" width="138" height="32" className="mb-32" />
          </a>
          <ul className="main-footer__list">
            <li className="main-footer__item">
              <a href="#" className="main-footer__list-link">
                Company
              </a>
              <ul className="main-footer__sublist">
                <li className="main-footer__subitem">
                  <a href="#" className="main-footer__sublink">
                    About Us
                  </a>
                </li>
                <li className="main-footer__subitem">
                  <a href="#" className="main-footer__sublink">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="main-footer__item">
              <a href="#" className="main-footer__list-link">
              Hosting
              </a>
              <ul className="main-footer__sublist">
                <li className="main-footer__subitem">
                  <a href="#" className="main-footer__sublink">
                  List your property
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="main-footer__item">
              <a href="#" className="main-footer__list-link">
                Support
              </a>
              <ul className="main-footer__sublist">
                <li className="main-footer__subitem">
                  <a href="#" className="main-footer__sublink">
                    FAQ
                  </a>
                </li>
                <li className="main-footer__subitem">
                  <a href="#" className="main-footer__sublink">
                    support@luxorts.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )}
    <div className="main-footer__wrapper">
      <div className="main-footer__container">
        {isRegistration && (
          <p className="main-footer__text text-align-center mb-0">
            By signing up, I agree to Luxorts{' '}
            <a className="main-footer__link main-link" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="main-footer__link main-link" href="#">
              Privacy Policy
            </a>
            .
          </p>
        )}
        {isAccount && (
          <>
            <p className="main-footer__deactivate text-align-center text-body mb-4">
              Need to deactivate your account?
            </p>
            <p className="text-align-center mb-0">
              <a className="main-link main-link--secondary" href="#">
                Click here to deactivate
              </a>
            </p>
          </>
        )}
        {isLanding && (
          <div className="main-footer__row d-flex align-items-sm-center flex-column flex-lg-row justify-content-lg-space-between">
            <div className="main-footer__column d-flex align-items-center flex-wrap justify-content-center">
              <p className="main-footer__text text-body mb-0 w-100 w-sm-auto text-align-center">
                © 2022 Luxorts. All rights reserved.
              </p>
              <SvgIcon icon="dot" className="icon main-footer__dot" />
              <a className="main-footer__link main-link" href="#">
                Terms of Service
              </a>
              <SvgIcon icon="dot" className="icon main-footer__dot" />
              <a className="main-footer__link main-link" href="#">
                Privacy Policy
              </a>
            </div>
            <div className="main-footer__column d-flex align-items-center justify-content-center">
              {/* <Button
                htmlType="button"
                className="main-btn main-btn--icon ml-md-auto main-footer__language mr-md-24"
              >
                <SvgIcon icon="globe" className="icon-left mr-8 main-footer__globe" />
                English
              </Button> */}
              <Button
                htmlType="button"
                className="main-btn main-btn--tertiary main-btn--icon main-btn--rounded mr-8"
              >
                <SvgIcon icon="instagram-filled" className="icon-right" />
              </Button>
              <Button
                htmlType="button"
                className="main-btn main-btn--tertiary main-btn--icon main-btn--rounded mr-8"
              >
                <SvgIcon icon="facebook-filled" className="icon-right" />
              </Button>
              <Button
                htmlType="button"
                className="main-btn main-btn--tertiary main-btn--icon main-btn--rounded"
              >
                <SvgIcon icon="twitter-filled" className="icon-right" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  </footer>
);

MainFooter.propTypes = {
  isAccount: PropTypes.bool,
  isRegistration: PropTypes.bool,
  isFooterMenu: PropTypes.bool,
  isLanding: PropTypes.bool,
};

MainFooter.defaultProps = {
  isAccount: false,
  isRegistration: false,
  isFooterMenu: false,
  isLanding: false,
};

export default MainFooter;
