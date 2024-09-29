import { Form } from 'antd';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ROUTES from 'constants/routes';

import GuestLayout from 'views/layouts/Guest';
import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';

import useContainer, { getInitialProps } from './hook';

const RecoverPassword = ({ email }) => {
  const { formik, isLoading, isResendLoading, onResendClickHandler } = useContainer();

  return (
    <div className="confirm d-flex flex-column align-items-center">
      <div className="mb-32">
        <Image src="/images/email.png" alt="" width="136" height="136" />
      </div>
      <h1 className="mb-8 confirm__title">
        <FormattedMessage id="shared.recoverYourPassword" />
      </h1>
      <p className="confirm__text mb-0">
        <FormattedMessage
          id="shared.weSentEmailToAddress"
          values={{
            address: <b className="confirm__text-bold">{email}</b>,
          }}
        />
      </p>
      <p className="confirm__text mb-32">
        <FormattedMessage id="shared.enterSecurityCodeToSetNewPassword" />
      </p>
      <Form layout="vertical" size="large" className="w-100">
        <FormikProvider value={formik}>
          <InputField
            name="code"
            formItemClassName="mb-32"
            placeholder={{ id: 'shared.enterSecurityCode' }}
          />
          <div className="confirm__buttons d-flex flex-column flex-sm-row align-items-center justify-content-space-between w-100">
            <Link href={ROUTES.SIGN_IN.PATH}>
              <a>
                <GradientButton
                  disabled={isLoading || isResendLoading}
                  text={{ id: 'shared.backToSignIn' }}
                  variant="tertiary"
                  className="mb-16 mb-sm-0"
                />
              </a>
            </Link>
            <GradientButton
              onClick={onResendClickHandler}
              disabled={isLoading}
              loading={isResendLoading}
              text={{ id: 'shared.resendEmail' }}
              variant="secondary"
              className="min-width-140 ml-sm-auto mr-sm-16 mb-16 mb-sm-0"
            />
            <GradientButton
              onClick={formik.handleSubmit}
              disabled={isResendLoading}
              loading={isLoading}
              text={{ id: 'shared.confirm' }}
              className="min-width-140 mb-16 mb-sm-0"
            />
          </div>
        </FormikProvider>
      </Form>
    </div>
  );
};

RecoverPassword.propTypes = {
  email: PropTypes.string.isRequired,
};

RecoverPassword.getInitialProps = getInitialProps;

RecoverPassword.Layout = GuestLayout;

export default RecoverPassword;
