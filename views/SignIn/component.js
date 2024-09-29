import { FormattedMessage } from 'react-intl';
import { Form } from 'antd';
import { FormikProvider } from 'formik';
import Link from 'next/link';

import { EMAIL_PLACEHOLDER } from 'constants';
import ROUTES from 'constants/routes';

import SignInLayout from 'views/layouts/SignIn';
import InputField from 'views/shared/form/InputField';
import PasswordField from 'views/shared/form/PasswordField';
import GradientButton from 'views/shared/GradientButton';

import useContainer, { getInitialProps } from './hook';

const SignIn = () => {
  const { formik, isLoading } = useContainer();

  return (
    <div className="sign-up">
      <h1 className="sign-up__title">
        <FormattedMessage id="shared.welcomeBack" />
      </h1>
      <p className="sign-up__caption">
        <FormattedMessage id="signIn.description" />
      </p>
      <Form layout="vertical" size="large">
        <FormikProvider value={formik}>
          <div className="sign-up__container mb-16">
            <InputField
              type="email"
              name="email"
              label={{ id: 'shared.email' }}
              placeholder={EMAIL_PLACEHOLDER}
            />
          </div>
          <div className="sign-up__container mb-36">
            <div className="input-text w-100">
              <div className="d-flex justify-content-space-between">
                <label className="input-text__label" htmlFor="password">
                  <FormattedMessage id="shared.password" />
                </label>
                <Link href={ROUTES.RESET_PASSWORD.PATH}>
                  <a className="main-text-btn fz-12">
                    <FormattedMessage id="shared.forgotPassword" />
                  </a>
                </Link>
              </div>
              <PasswordField name="password" autoComplete="new-password" />
            </div>
          </div>
          <div className="d-flex justify-content-flex-end">
            <GradientButton
              loading={isLoading}
              onClick={formik.handleSubmit}
              text={{ id: 'shared.signIn' }}
              className="min-width-140"
            />
          </div>
        </FormikProvider>
      </Form>
    </div>
  );
};

SignIn.getInitialProps = getInitialProps;

SignIn.Layout = SignInLayout;

export default SignIn;
