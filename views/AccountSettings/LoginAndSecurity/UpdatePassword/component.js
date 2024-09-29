import PropTypes from 'prop-types';
import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

import ROUTES from 'constants/routes';

import PasswordField from 'views/shared/form/PasswordField';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const UpdatePassword = ({ onCancel }) => {
  const { formik, isLoading, handleSubmit } = useContainer({ onCancel });

  return (
    <>
      <p className="personal-information__descr text-body mb-16">
        <FormattedMessage id="loginAndSecurity.description" />
      </p>
      <Form layout="vertical" size="large">
        <FormikProvider value={formik}>
          <div className="input-text w-100 mb-16">
            <div className="d-flex justify-content-space-between">
              <label className="input-text__label" htmlFor="password">
                <FormattedMessage id="shared.currentPassword" />
              </label>
              <Link href={ROUTES.RESET_PASSWORD.PATH}>
                <a className="main-text-btn fz-12">
                  <FormattedMessage id="shared.forgotPassword" />
                </a>
              </Link>
            </div>
            <PasswordField name="currentPassword" autoComplete="new-password" />
          </div>
          <div className="input-text w-100 mb-28">
            <PasswordField
              name="newPassword"
              label={{ id: 'shared.newPassword' }}
              autoComplete="new-password"
              withProgress
            />
          </div>
          <div className="d-flex mb-24">
            <GradientButton
              onClick={onCancel}
              text={{ id: 'shared.cancel' }}
              className="min-width-120 mr-16"
              variant="tertiary"
            />
            <GradientButton
              loading={isLoading}
              onClick={handleSubmit}
              className="min-width-140 mr-16"
              text={{ id: 'shared.submit' }}
            />
          </div>
        </FormikProvider>
      </Form>
    </>
  );
};

UpdatePassword.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UpdatePassword;
