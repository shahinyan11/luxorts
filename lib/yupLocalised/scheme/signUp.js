import yup from 'lib/yupLocalised';
import { MAX_INPUT_LENGTH } from 'constants';
import { SIGN_UP_VALIDATION } from 'constants/validations';

const validationSchema = yup.object().shape({
  userProfile: yup.object().shape({
    firstName: yup.string().max(MAX_INPUT_LENGTH).required(),
    lastName: yup.string().max(MAX_INPUT_LENGTH).required(),
    dateOfBirth: yup.string().minAge(SIGN_UP_VALIDATION.AGE.MIN).required(),
    phoneNumber: yup.string().required(),
  }),
  email: yup.string().email().max(MAX_INPUT_LENGTH).required(),
  password: yup
    .string()
    .min(SIGN_UP_VALIDATION.PASSWORD.MIN, {
      id: 'password.min',
      values: {
        min: SIGN_UP_VALIDATION.PASSWORD.MIN,
      },
    })
    .max(SIGN_UP_VALIDATION.PASSWORD.MAX)
    .required(),
});

export default validationSchema;
