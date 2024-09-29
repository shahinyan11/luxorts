import yup from 'lib/yupLocalised';
import { SIGN_UP_VALIDATION } from 'constants/validations';

const validationSchema = yup.object().shape({
  currentPassword: yup
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
