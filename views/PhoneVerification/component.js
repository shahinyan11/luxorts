import { Form } from 'antd';
import { FormikProvider } from 'formik';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

import GuestLayout from 'views/layouts/Guest';
import InputField from 'views/shared/form/InputField';
import GradientButton from 'views/shared/GradientButton';

import useContainer, { getInitialProps } from './hook';

const PhoneVerification = ({ currentUser }) => {
  const { formik, isLoading } = useContainer();

  return (
    <div className="confirm mt-40 mb-40 mt-sm-88 mb-sm-88 d-flex flex-column align-items-center">
      <div className="mb-40">
        <Image src="/images/email.png" alt="" width="136" height="136" />
      </div>
      <h1 className="mb-8 confirm__title">
        <FormattedMessage id="phoneConfirmation.title" />
      </h1>
      <p className="confirm__text mb-0">
        <FormattedMessage
          id="phoneConfirmation.description"
          values={{
            phone: <b className="confirm__text-bold">{currentUser.userProfile.phoneNumber}</b>,
          }}
        />
      </p>
      <p className="confirm__text mb-32">
        <FormattedMessage id="phoneConfirmation.enterCode" />
      </p>
      <Form layout="vertical" size="large" className="w-100">
        <FormikProvider value={formik}>
          <InputField
            name="code"
            formItemClassName="mb-32"
            placeholder={{ id: 'shared.enterSecurityCode' }}
          />
          <div className="confirm__buttons d-flex justify-content-flex-end w-100">
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

PhoneVerification.propTypes = {
  currentUser: PropTypes.shape().isRequired,
};

PhoneVerification.getInitialProps = getInitialProps;

PhoneVerification.Layout = GuestLayout;

export default PhoneVerification;
