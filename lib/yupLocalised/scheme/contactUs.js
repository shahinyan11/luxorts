import yup from 'lib/yupLocalised';

import { MAX_INPUT_LENGTH, MAX_MESSAGE_LENGTH } from 'constants';

const validationSchema = yup.object().shape({
  firstName: yup.string().max(MAX_INPUT_LENGTH).required(),
  lastName: yup.string().max(MAX_INPUT_LENGTH).required(),
  email: yup.string().email().max(MAX_INPUT_LENGTH).required(),
  phoneNumber: yup.string().required(),
  message: yup.string().max(MAX_MESSAGE_LENGTH).nullable(),
});

export default validationSchema;
