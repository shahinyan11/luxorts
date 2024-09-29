import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import UpdatePassword from 'views/AccountSettings/LoginAndSecurity/UpdatePassword';
import RecoverPassword from 'views/AccountSettings/LoginAndSecurity/RecoverPassword';
import LoginAndSecurityLayout from 'views/layouts/LoginAndSecurity';
import SvgIcon from 'views/shared/SvgIcon';
import Breadcrumb from 'views/shared/Breadcrumb';
import PageInfo from 'views/shared/PageInfo';

import useContainer, { getInitialProps } from './hook';

const LoginAndSecurity = () => {
  const { updateMode, recoverMode, toggleUpdateMode, handleRecoverClick, lastUpdatedDate } =
    useContainer();

  return (
    <div className="personal-information">
      <Breadcrumb />
      <h1 className="text-display-2 mb-lg-64 mb-32">
        <FormattedMessage id="loginAndSecurity.title" />
      </h1>
      <div className="personal-information__content">
        <div className="personal-information__user">
          <div className="personal-information__item mb-24">
            <div className="personal-information__header d-flex justify-content-space-between mb-8">
              <p
                className={classNames('personal-information__label mb-0', {
                  'personal-information__label--active': updateMode || recoverMode,
                })}
              >
                <FormattedMessage id="shared.password" />
              </p>
              {!updateMode && !recoverMode && (
                <>
                  <a
                    onClick={handleRecoverClick}
                    role="button"
                    className="main-text-btn personal-information__edit personal-information__edit--active text-body-2 ml-auto mr-16"
                  >
                    <FormattedMessage id="shared.recover" />
                  </a>
                  <a
                    onClick={toggleUpdateMode}
                    role="button"
                    className="main-text-btn personal-information__edit personal-information__edit--active text-body-2"
                  >
                    <FormattedMessage id="shared.update" />
                  </a>
                </>
              )}
            </div>
            {!updateMode && !recoverMode && (
              <p className="personal-information__value mb-24">
                <FormattedMessage
                  id="loginAndSecurity.lastUpdateTime"
                  values={{
                    time: lastUpdatedDate,
                  }}
                />
              </p>
            )}
            {updateMode && <UpdatePassword onCancel={toggleUpdateMode} />}
            {recoverMode && <RecoverPassword />}
          </div>
        </div>
        <PageInfo
          icon={<SvgIcon icon="user-shield" className="personal-information__icon" />}
          title={{ id: 'loginAndSecurity.title' }}
          description={{ id: 'loginAndSecurity.info.description' }}
        />
      </div>
    </div>
  );
};

LoginAndSecurity.getInitialProps = getInitialProps;

LoginAndSecurity.Layout = LoginAndSecurityLayout;

export default LoginAndSecurity;
