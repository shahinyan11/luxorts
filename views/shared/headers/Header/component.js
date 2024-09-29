import Link from 'next/link';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {FormikProvider} from 'formik';
import {Form} from 'antd';
import classNames from 'classnames';
import Image from 'next/image';

import ROUTES from 'constants/routes';

import RangePickerField from 'views/shared/form/RangePickerField';
import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';
import SvgIcon from 'views/stubs/shared/SvgIcon';

import LoggedInUserWidget from './LoggedInUserWidget';
import LoggedOutUserWidget from './LoggedOutUserWidget';
import useContainer from './hook';

const Header = ({ isSignIn, isSignUp, isGuest, isWithFilter }) => {
  const {
    isLoggedInUserWidgetVisible,
    isLoggedOutUserWidgetVisible,
    formik,
    switchToHostingRoute,
  } = useContainer({
    isSignIn,
    isSignUp,
    isGuest,
  });

  return (
    <header className="main-header">
      <div
        className={classNames('main-header__container', {
          'main-header__container--filter': isWithFilter,
        })}
      >
        <Link href={ROUTES.INDEX.PATH}>
          <a className="main-header__logo">
            <Image src="/images/logo.svg" alt="" width="138" height="32" />
          </a>
        </Link>
        {isWithFilter && (
          <Form layout="vertical" size="large" className="search ml-xl-24 mr-xl-auto">
            <FormikProvider value={formik}>
              <div className="search__location search__location--header">
                <InputField
                  name="location"
                  placeholder={{ id: 'shared.location' }}
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  className="search__input"
                  formItemClassName="search__item"
                />
              </div>
              <div className="search__dates search__dates--header">
                <RangePickerField
                  clearIcon={<SvgIcon icon="cross" />}
                  suffixIcon={false}
                  separator={false}
                  placeholder={[{ id: 'shared.checkIn' }, { id: 'shared.checkOut' }]}
                  className="w-100"
                  size="large"
                  name="date"
                />
              </div>
              <div className="search__guests search__guests--header">
                <InputField
                  name="guests"
                  placeholder={{ id: 'shared.guests' }}
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  className="search__input"
                  formItemClassName="search__item mb-0"
                />
                <GradientButton
                  className="search__submit main-btn--small main-btn--icon"
                  variant="primary"
                  addonBefore={<SvgIcon icon="search" className="icon-right" />}
                />
              </div>
            </FormikProvider>
          </Form>
        )}
        {isSignIn && (
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <span className="main-header__caption mb-8 mb-sm-0">
              <FormattedMessage id="shared.dontHaveAnAccountYet" />
            </span>
            <Link href={ROUTES.SIGN_UP.PATH}>
              <a>
                <GradientButton
                  className="main-btn--md main-header__button ml-sm-16 min-width-120"
                  text={{ id: 'shared.signUp' }}
                  variant="secondary"
                />
              </a>
            </Link>
          </div>
        )}
        {isSignUp && (
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <span className="main-header__caption mb-8 mb-sm-0">
              <FormattedMessage id="shared.alreadyHaveAnAccount" />
            </span>
            <Link href={ROUTES.SIGN_IN.PATH}>
              <a>
                <GradientButton
                  className="main-btn--md main-header__button ml-sm-16 min-width-120"
                  text={{ id: 'shared.signIn' }}
                  variant="secondary"
                />
              </a>
            </Link>
          </div>
        )}
        {!isLoggedInUserWidgetVisible && (
          <LoggedInUserWidget switchToHostingRoute={switchToHostingRoute} />
        )}
        {isLoggedOutUserWidgetVisible && <LoggedOutUserWidget />}
      </div>
    </header>
  );
};

Header.defaultProps = {
  isSignIn: false,
  isSignUp: false,
  isGuest: false,
  isWithFilter: false,
};

Header.propTypes = {
  isSignIn: PropTypes.bool,
  isSignUp: PropTypes.bool,
  isGuest: PropTypes.bool,
  isWithFilter: PropTypes.bool,
};

export default Header;
