import yup from 'lib/yupLocalised';
import { without } from 'ramda';

import { MAX_INPUT_LENGTH } from 'constants';
import { SIGN_UP_VALIDATION, ZIP_CODE } from 'constants/validations';

import isPresent from 'utils/isPresent';

const driverLicenseFields = ['drivingLicenseLastName', 'drivingLicenseFirstName'];
const addressFields = ['country', 'street', 'city', 'state', 'zipCode'];

const validationSchema = yup.object().shape(
  {
    firstName: yup.string().max(MAX_INPUT_LENGTH).required(),
    lastName: yup.string().max(MAX_INPUT_LENGTH).required(),
    dateOfBirth: yup.string().minAge(SIGN_UP_VALIDATION.AGE.MIN).required(),
    drivingLicenseFirstName: yup
      .string()
      .max(MAX_INPUT_LENGTH)
      .when(without('drivingLicenseFirstName', driverLicenseFields), {
        is: isPresent,
        then: yup.string().nullable().required(),
        otherwise: yup.string().nullable(),
      }),
    drivingLicenseLastName: yup
      .string()
      .max(MAX_INPUT_LENGTH)
      .when(without('drivingLicenseLastName', driverLicenseFields), {
        is: isPresent,
        then: yup.string().nullable().required(),
        otherwise: yup.string().nullable(),
      }),
    about: yup.string().max(MAX_INPUT_LENGTH).nullable(),
    country: yup.string().when(without('country', addressFields), {
      is: isPresent,
      then: yup.string().nullable().required(),
      otherwise: yup.string().nullable(),
    }),
    street: yup.string().max(MAX_INPUT_LENGTH).when(without('street', addressFields), {
      is: isPresent,
      then: yup.string().nullable().required(),
      otherwise: yup.string().nullable(),
    }),
    apartmentNumber: yup.string().max(MAX_INPUT_LENGTH).nullable(),
    city: yup.string().max(MAX_INPUT_LENGTH).when(without('city', addressFields), {
      is: isPresent,
      then: yup.string().nullable().required(),
      otherwise: yup.string().nullable(),
    }),
    state: yup.string().when(without('state', addressFields), {
      is: isPresent,
      then: yup.string().nullable().required(),
      otherwise: yup.string().nullable(),
    }),
    zipCode: yup
      .string()
      .min(ZIP_CODE.MIN, {
        id: 'validations.minDigits',
        values: {
          min: ZIP_CODE.MIN,
        },
      })
      .max(ZIP_CODE.MAX, {
        id: 'validations.maxDigits',
        values: {
          max: ZIP_CODE.MAX,
        },
      })
      .when(without('zipCode', addressFields), {
        is: isPresent,
        then: yup.string().nullable().required(),
        otherwise: yup.string().nullable(),
      }),
  },
  [
    driverLicenseFields,
    ['country', 'street'],
    ['country', 'city'],
    ['country', 'state'],
    ['country', 'zipCode'],
    ['street', 'city'],
    ['street', 'state'],
    ['street', 'zipCode'],
    ['city', 'state'],
    ['city', 'zipCode'],
    ['state', 'zipCode'],
  ],
);

export default validationSchema;
