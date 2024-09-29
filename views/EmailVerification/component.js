import { Form } from 'antd';
import { FormikProvider } from 'formik';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

import GuestLayout from 'views/layouts/Guest';
import InputField from 'views/shared/form/InputField';
import GradientButton from 'views/shared/GradientButton';

import useContainer, { getInitialProps } from './hook';

const EmailVerification = ({ currentUser }) => {
  const { formik, isLoading, isResendLoading, onResendClickHandler } = useContainer();

  return (
    <div className="confirm mt-40 mb-40 mt-sm-88 mb-sm-88 d-flex flex-column align-items-center">
      <div className="mb-40">
        <Image src="/images/email.png" alt="" width="136" height="136" />
      </div>
      <h1 className="mb-8 confirm__title">
        <FormattedMessage id="emailConfirmation.title" />
      </h1>
      <p className="confirm__text mb-0">
        <FormattedMessage
          id="shared.weSentEmailToAddress"
          values={{
            address: <b className="confirm__text-bold">{currentUser.email}</b>,
          }}
        />
      </p>
      <p className="confirm__text mb-32">
        <FormattedMessage id="emailConfirmation.enterCode" />
      </p>
      <Form layout="vertical" size="large" className="w-100">
        <FormikProvider value={formik}>
          <InputField
            name="code"
            formItemClassName="mb-32"
            placeholder={{ id: 'shared.enterSecurityCode' }}
          />
          <div className="confirm__buttons d-flex justify-content-space-between w-100">
            <GradientButton
              loading={isResendLoading}
              onClick={onResendClickHandler}
              text={{ id: 'shared.resendEmail' }}
              variant="secondary"
              className="min-width-140"
            />
            <GradientButton
              loading={isLoading}
              onClick={formik.handleSubmit}
              text={{ id: 'shared.confirm' }}
              className="min-width-140"
            />
          </div>
        </FormikProvider>
      </Form>
    </div>
  );
};

EmailVerification.propTypes = {
  currentUser: PropTypes.shape().isRequired,
};

EmailVerification.getInitialProps = getInitialProps;

EmailVerification.Layout = GuestLayout;

export default EmailVerification;
