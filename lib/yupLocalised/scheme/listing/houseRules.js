import { MAX_INPUT_LENGTH } from 'constants';
import yup from 'lib/yupLocalised';

const validationSchema = yup.object().shape({
  additional: yup.object().shape({
    name: yup.string().max(MAX_INPUT_LENGTH),
  }),
});

export default validationSchema;
