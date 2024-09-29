import yup from 'lib/yupLocalised';
import { MAX_INPUT_LENGTH } from 'constants';

const validationSchema = yup.object().shape({
  email: yup.string().email().max(MAX_INPUT_LENGTH).required(),
  password: yup.string().required(),
});

export default validationSchema;
