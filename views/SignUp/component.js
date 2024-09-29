import { Form } from 'antd';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';

import { EMAIL_PLACEHOLDER } from 'constants';

import SignUpLayout from 'views/layouts/SignUp';
import InputField from 'views/shared/form/InputField';
import DateField from 'views/shared/form/DateField';
import PhoneField from 'views/shared/form/PhoneField';
import PasswordField from 'views/shared/form/PasswordField';
import GradientButton from 'views/shared/GradientButton';

import useContainer, { getInitialProps } from './hook';

const SignUp = () => {
  const { formik, isLoading } = useContainer();

  return (
    <div className="sign-up">
      <h1 className="sign-up__title">
        <FormattedMessage id="signUp.title" />
      </h1>
      <p className="sign-up__caption">
        <FormattedMessage id="signUp.description" />
      </p>
      <Form layout="vertical" size="large">
        <FormikProvider value={formik}>
          <div className="main-btn-container-two-items">
            <InputField name="userProfile.firstName" label={{ id: 'shared.firstName' }} />
            <InputField name="userProfile.lastName" label={{ id: 'shared.lastName' }} />
          </div>
          <div className="sign-up__container mb-20">
            <DateField
              name="userProfile.dateOfBirth"
              label={{ id: 'shared.dateOfBirth' }}
              placeholder={{ id: 'shared.dateFormat' }}
              tooltip={{ id: 'signUp.dateOfBirth.info' }}
              className="w-100"
              size="large"
            />
          </div>
          <div className="sign-up__container mb-16">
            <InputField
              type="email"
              name="email"
              label={{ id: 'shared.email' }}
              placeholder={EMAIL_PLACEHOLDER}
            />
          </div>
          <div className="sign-up__container">
            <PhoneField
              name="userProfile.phoneNumber"
              className="main-phone-input"
              label={{ id: 'shared.phoneNumber' }}
            />
          </div>
          <div className="sign-up__container mb-36">
            <PasswordField
              name="password"
              label={{ id: 'shared.password' }}
              autoComplete="new-password"
              withProgress
            />
          </div>
          <div className="d-flex justify-content-flex-end">
            <GradientButton
              loading={isLoading}
              onClick={formik.handleSubmit}
              text={{ id: 'shared.signUp' }}
              className="min-width-140"
            />
          </div>
        </FormikProvider>
      </Form>
    </div>
  );
};

SignUp.getInitialProps = getInitialProps;

SignUp.Layout = SignUpLayout;

export default SignUp;
