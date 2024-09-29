import yup from 'lib/yupLocalised';
import { SIGN_UP_VALIDATION } from 'constants/validations';
import { MAX_INPUT_LENGTH } from 'constants';

const validationSchema = yup.object().shape({
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
