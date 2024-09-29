import { MAX_INPUT_LENGTH } from 'constants';
import yup from 'lib/yupLocalised';
import isPresent from 'utils/isPresent';

const validationSchema = yup.object().shape({
  additional: yup.object().shape(
    {
      name: yup.string().when('description', {
        is: isPresent,
        then: yup.string().max(MAX_INPUT_LENGTH).required(),
        otherwise: yup.string().max(MAX_INPUT_LENGTH),
      }),
      description: yup.string().when('name', {
        is: isPresent,
        then: yup.string().max(MAX_INPUT_LENGTH).required(),
        otherwise: yup.string().max(MAX_INPUT_LENGTH),
      }),
    },
    ['name', 'description'],
  ),
});

export default validationSchema;
