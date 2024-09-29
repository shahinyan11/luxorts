import yup from 'lib/yupLocalised';
import { MAX_INPUT_LENGTH } from 'constants';

const validationSchema = yup.object().shape({
  listingPhotos: yup.array().of(
    yup.object().shape({
      description: yup.string().max(MAX_INPUT_LENGTH),
    }),
  ),
});

export default validationSchema;
