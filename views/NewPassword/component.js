import { Form } from 'antd';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';

import ROUTES from 'constants/routes';

import GuestLayout from 'views/layouts/Guest';
import GradientButton from 'views/shared/GradientButton';
import PasswordField from 'views/shared/form/PasswordField';

import useContainer, { getInitialProps } from './hook';

const NewPassword = () => {
  const { formik, isLoading } = useContainer();

  return (
    <div className="sign-up">
      <h1 className="sign-up__title text-align-center">
        <FormattedMessage id="shared.newPassword" />
      </h1>
      <p className="sign-up__caption text-align-center">
        <FormattedMessage id="newPassword.description" />
      </p>
      <Form layout="vertical" size="large">
        <FormikProvider value={formik}>
          <div className="sign-up__container mb-36">
            <PasswordField
              name="password"
              label={{ id: 'shared.newPassword' }}
              autoComplete="new-password"
              withProgress
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
              text={{ id: 'shared.submit' }}
            />
          </div>
        </FormikProvider>
      </Form>
    </div>
  );
};

NewPassword.getInitialProps = getInitialProps;

NewPassword.Layout = GuestLayout;

export default NewPassword;
