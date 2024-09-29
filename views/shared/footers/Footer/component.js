import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { SUPPORT_EMAIL } from 'constants';
import ROUTES from 'constants/routes';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const Footer = ({ isAccount, isRegistration, isFooterMenu, isLanding }) => {
  const { handleDeactivateClick } = useContainer();

  return (
    <footer className="main-footer">
      {isFooterMenu && (
        <div className="main-footer__wrapper main-footer__wrapper--menu">
          <div className="main-footer__container">
            <Link href={ROUTES.INDEX.PATH}>
              <a className="main-footer__logo">
                <div className="mb-32">
                  <Image src="/images/logo.svg" alt="" width="138" height="32" />
                </div>
              </a>
            </Link>
            <ul className="main-footer__list">
              <li className="main-footer__item">
                <Link href="#">
                  <a href="#" className="main-footer__list-link">
                    <FormattedMessage id="shared.company" />
                  </a>
                </Link>
                <ul className="main-footer__sublist">
                  <li className="main-footer__subitem">
                    <Link href={ROUTES.ABOUT_US.PATH}>
                      <a className="main-footer__sublink">
                        <FormattedMessage id="shared.aboutUs" />
                      </a>
                    </Link>
                  </li>
                  <li className="main-footer__subitem">
                    <Link href={ROUTES.CONTACT_US.PATH}>
                      <a className="main-footer__sublink">
                        <FormattedMessage id="shared.contactUs" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="main-footer__item">
                <Link href="#">
                  <a className="main-footer__list-link">
                    <FormattedMessage id="shared.support" />
                  </a>
                </Link>
                <ul className="main-footer__sublist">
                  <li className="main-footer__subitem">
                    <Link href={ROUTES.FAQ.PATH}>
                      <a className="main-footer__sublink">
                        <FormattedMessage id="shared.faq" />
                      </a>
                    </Link>
                  </li>
                  <li className="main-footer__subitem">
                    <Link href="#">
                      <a className="main-footer__sublink">{SUPPORT_EMAIL}</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="main-footer__wrapper">
        <div className="main-footer__container">
          {isAccount && (
            <>
              <p className="main-footer__deactivate text-align-center text-body mb-4">
                <FormattedMessage id="footer.needToDeactivateYourAccount" />
              </p>
              <p className="text-align-center mb-0">
                <a
                  onClick={handleDeactivateClick}
                  role="button"
                  className="main-link main-link--secondary"
                >
                  <FormattedMessage id="footer.clickHereToDeactivate" />
                </a>
              </p>
            </>
          )}
          {isRegistration && (
            <p className="main-footer__text text-align-center mb-0">
              <FormattedMessage
                id="footer.termsAndPolicy"
                values={{
                  termsLink: (
                    <a
                      className="main-footer__link main-link"
                      href={ROUTES.TERMS.PATH}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage id="shared.termsOfService" />
                    </a>
                  ),
                  policyLink: (
                    <a
                      className="main-footer__link main-link"
                      href={ROUTES.POLICY.PATH}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FormattedMessage id="shared.privacyPolicy" />
                    </a>
                  ),
                }}
              />
            </p>
          )}
          {isLanding && (
            <div className="main-footer__row d-flex align-items-sm-center flex-column flex-lg-row justify-content-lg-space-between">
              <div className="main-footer__column d-flex align-items-center flex-wrap justify-content-center">
                <p className="main-footer__text text-body mb-0 w-100 w-sm-auto text-align-center">
                  <FormattedMessage
                    id="footer.allRightsReserved"
                    values={{
                      year: moment().year(),
                    }}
                  />
                </p>
                <SvgIcon icon="dot" className="icon main-footer__dot" />
                <Link href={ROUTES.TERMS.PATH}>
                  <a className="main-footer__link main-link">
                    <FormattedMessage id="shared.termsOfService" />
                  </a>
                </Link>
                <SvgIcon icon="dot" className="icon main-footer__dot" />
                <Link href={ROUTES.POLICY.PATH}>
                  <a className="main-footer__link main-link" href="#">
                    <FormattedMessage id="shared.privacyPolicy" />
                  </a>
                </Link>
              </div>
              <div className="main-footer__column d-flex align-items-center justify-content-center">
                <GradientButton
                  className="main-btn--icon main-btn--rounded mr-8"
                  variant="tertiary"
                  addonBefore={<SvgIcon icon="instagram-filled" className="icon-right" />}
                />
                <GradientButton
                  className="main-btn--icon main-btn--rounded mr-8"
                  variant="tertiary"
                  addonBefore={<SvgIcon icon="facebook-filled" className="icon-right" />}
                />
                <GradientButton
                  className="main-btn--icon main-btn--rounded mr-8"
                  variant="tertiary"
                  addonBefore={<SvgIcon icon="twitter-filled" className="icon-right" />}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isAccount: PropTypes.bool,
  isRegistration: PropTypes.bool,
  isLanding: PropTypes.bool,
  isFooterMenu: PropTypes.bool,
};

Footer.defaultProps = {
  isAccount: false,
  isRegistration: false,
  isFooterMenu: false,
  isLanding: false,
};

export default Footer;
