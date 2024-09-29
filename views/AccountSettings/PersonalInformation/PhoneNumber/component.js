import { FormikProvider } from 'formik';

import PhoneNumberConfirm from 'views/AccountSettings/PersonalInformation/PhoneNumberConfirm';
import FieldWrapper from 'views/AccountSettings/PersonalInformation/FieldWrapper';
import PhoneField from 'views/shared/form/PhoneField';

import useContainer from './hook';

const PhoneNumber = () => {
  const { formik, newPhone, isLoading } = useContainer();

  return (
    <>
      {!newPhone && (
        <FormikProvider value={formik}>
          <FieldWrapper
            fieldNames={['phoneNumber']}
            value={formik.values.phoneNumber}
            label={{ id: 'shared.phoneNumber' }}
            description={{ id: 'personalInformation.phoneNumber.description' }}
            isLoading={isLoading}
            changeMode={false}
          >
            <PhoneField
              name="phoneNumber"
              className="main-phone-input"
              label={{ id: 'shared.phoneNumber' }}
            />
          </FieldWrapper>
        </FormikProvider>
      )}
      {newPhone && <PhoneNumberConfirm />}
    </>
  );
};

export default PhoneNumber;
