import { Form } from 'antd';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';

import ROUTES from 'constants/routes';
import { EMAIL_PLACEHOLDER } from 'constants';

import GuestLayout from 'views/layouts/Guest';
import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';

import useContainer from './hook';

const ResetPassword = () => {
  const { formik, isLoading } = useContainer();

  return (
    <div className="sign-up">
      <h1 className="sign-up__title text-align-center">
        <FormattedMessage id="shared.lostYourPassword" />
      </h1>
      <p className="sign-up__caption text-align-center">
        <FormattedMessage id="resetPassword.description" />
      </p>
      <Form layout="vertical" size="large">
        <FormikProvider value={formik}>
          <div className="sign-up__container mb-32">
            <InputField
              type="email"
              name="email"
              label={{ id: 'shared.email' }}
              placeholder={EMAIL_PLACEHOLDER}
            />
          </div>
          <div className="d-flex justify-content-space-between align-items-center">
            <Link href={ROUTES.SIGN_IN.PATH}>
              <a>
                <GradientButton
                  disabled={isLoading}
                  text={{ id: 'shared.backToSignIn' }}
                  variant="tertiary"
                />
              </a>
            </Link>
            <GradientButton
              loading={isLoading}
              onClick={formik.handleSubmit}
              className="min-width-140"
              text={{ id: 'shared.recover' }}
            />
          </div>
        </FormikProvider>
      </Form>
    </div>
  );
};

ResetPassword.Layout = GuestLayout;

export default ResetPassword;
