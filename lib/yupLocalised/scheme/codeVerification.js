import yup from 'lib/yupLocalised';
import { SIGN_UP_VALIDATION } from 'constants/validations';

const validationSchema = yup.object().shape({
  code: yup.string().stringLength(SIGN_UP_VALIDATION.CODE.LENGTH).required(),
});

export default validationSchema;
