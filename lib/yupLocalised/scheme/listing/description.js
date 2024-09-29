import yup from 'lib/yupLocalised';
import { MAX_INPUT_LENGTH } from 'constants';
import { MAX_LISTING_TITLE_LENGTH } from 'constants/validations';

const validationSchema = yup.object().shape({
  title: yup.string().max(MAX_LISTING_TITLE_LENGTH).required(),
  hiddenTitle: yup.string().max(MAX_LISTING_TITLE_LENGTH),
  description: yup.string().max(MAX_INPUT_LENGTH),
});

export default validationSchema;
