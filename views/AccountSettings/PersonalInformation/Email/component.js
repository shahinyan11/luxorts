import { FormikProvider } from 'formik';

import FieldWrapper from 'views/AccountSettings/PersonalInformation/FieldWrapper';
import PasswordField from 'views/shared/form/PasswordField';
import InputField from 'views/shared/form/InputField';

import useContainer from './hook';

const Email = () => {
  const { formik, email } = useContainer();

  return (
    <FormikProvider value={formik}>
      <FieldWrapper
        value={email}
        label={{ id: 'shared.email' }}
        description={{ id: 'personalInformation.email.description' }}
      >
        <InputField type="email" name="email" label={{ id: 'shared.email' }} />
        <PasswordField name="password" label={{ id: 'shared.currentPassword' }} />
      </FieldWrapper>
    </FormikProvider>
  );
};

export default Email;
