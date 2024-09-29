import { Form, Input } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import { GENDER_OPTIONS } from 'constants/accountSettings';

import getFullAddress from 'utils/users/getFullAddress';
import getUserFullName from 'utils/users/getUserFullName';
import getUserDrivingLicenseFullName from 'utils/users/getUserDrivingLicenseFullName';

import SvgIcon from 'views/shared/SvgIcon';
import PersonalInformationLayout from 'views/layouts/PersonalInformation';
import InputField from 'views/shared/form/InputField';
import SelectField from 'views/shared/form/SelectField';
import DateField from 'views/shared/form/DateField';
import Address from 'views/shared/form/Address';
import Breadcrumb from 'views/shared/Breadcrumb';
import PageInfo from 'views/shared/PageInfo';

import FieldWrapper from './FieldWrapper';
import PhoneNumber from './PhoneNumber';
import Email from './Email';
import useContainer, { getInitialProps } from './hook';

const PersonalInformation = () => {
  const { formik } = useContainer();
  const { gender, dateOfBirth, about } = formik.values;

  return (
    <div className="personal-information">
      <Breadcrumb />
      <h1 className="text-display-2 mb-lg-64 mb-32">
        <FormattedMessage id="personalInformation.title" />
      </h1>
      <div className="personal-information__content">
        <div className="personal-information__user">
          <Form layout="vertical" size="large">
            <FormikProvider value={formik}>
              <FieldWrapper
                fieldNames={['firstName', 'lastName']}
                value={getUserFullName({ userProfile: formik.values })}
                label={{ id: 'shared.fullName' }}
                description={{ id: 'personalInformation.fullName.description' }}
              >
                <div className="container-two-items mb-8">
                  <InputField name="firstName" label={{ id: 'shared.firstName' }} />
                  <InputField name="lastName" label={{ id: 'shared.lastName' }} />
                </div>
              </FieldWrapper>
              <FieldWrapper fieldNames={['gender']} value={gender} label={{ id: 'shared.gender' }}>
                <SelectField
                  name="gender"
                  placeholder={{ id: 'shared.selectGender' }}
                  options={GENDER_OPTIONS}
                  showSearch
                />
              </FieldWrapper>
              <FieldWrapper
                fieldNames={['dateOfBirth']}
                value={dateOfBirth}
                label={{ id: 'shared.dateOfBirth' }}
              >
                <div className="d-flex justify-content-space-between mb-24 flex-wrap">
                  <DateField
                    name="dateOfBirth"
                    placeholder={{ id: 'shared.dateFormat' }}
                    tooltip={{ id: 'personalInformation.dateOfBirth.description' }}
                    className="w-100"
                    formItemClassName="w-100"
                    size="large"
                  />
                </div>
              </FieldWrapper>
              <FieldWrapper
                fieldNames={['about']}
                value={about}
                label={{ id: 'shared.about' }}
                description={{ id: 'personalInformation.about.description' }}
              >
                <InputField formItemClassName="mb-24" name="about" asComponent={Input.TextArea} />
              </FieldWrapper>
              <Email />
              <PhoneNumber />
              <FieldWrapper
                value={getFullAddress(formik.values)}
                label={{ id: 'shared.address' }}
                description={{ id: 'personalInformation.address.description' }}
              >
                <Address />
              </FieldWrapper>
              <FieldWrapper
                fieldNames={['drivingLicenseFirstName', 'drivingLicenseLastName']}
                value={getUserDrivingLicenseFullName({ userProfile: formik.values })}
                label={{ id: 'shared.nameOnDriverLicense' }}
                description={{ id: 'personalInformation.driverLicense.description' }}
              >
                <div className="container-two-items mb-8">
                  <InputField name="drivingLicenseFirstName" label={{ id: 'shared.firstName' }} />
                  <InputField name="drivingLicenseLastName" label={{ id: 'shared.lastName' }} />
                </div>
              </FieldWrapper>
            </FormikProvider>
          </Form>
        </div>
        <PageInfo
          icon={<SvgIcon icon="profile" className="personal-information__icon" />}
          title={{ id: 'personalInformation.descriptionTitle' }}
          description={{ id: 'personalInformation.description' }}
        />
      </div>
    </div>
  );
};

PersonalInformation.getInitialProps = getInitialProps;

PersonalInformation.Layout = PersonalInformationLayout;

export default PersonalInformation;
