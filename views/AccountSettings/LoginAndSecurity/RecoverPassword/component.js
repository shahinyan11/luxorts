import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import PasswordField from 'views/shared/form/PasswordField';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const RecoverPassword = () => {
  const { formik, isLoading, onCancel } = useContainer();

  return (
    <>
      <p className="personal-information__descr text-body mb-16">
        <FormattedMessage id="loginAndSecurity.description" />
      </p>
      <Form layout="vertical" size="large">
        <FormikProvider value={formik}>
          <div className="input-text w-100 mb-28">
            <PasswordField
              name="password"
              label={{ id: 'shared.newPassword' }}
              autoComplete="new-password"
              withProgress
            />
          </div>
          <div className="d-flex mb-24">
            <GradientButton
              onClick={onCancel}
              disabled={isLoading}
              text={{ id: 'shared.cancel' }}
              className="min-width-120 mr-16"
              variant="tertiary"
            />
            <GradientButton
              loading={isLoading}
              onClick={formik.handleSubmit}
              className="min-width-140 mr-16"
              text={{ id: 'shared.submit' }}
            />
          </div>
        </FormikProvider>
      </Form>
    </>
  );
};

export default RecoverPassword;
