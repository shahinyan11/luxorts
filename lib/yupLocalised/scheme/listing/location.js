import yup from 'lib/yupLocalised';
import { MAX_INPUT_LENGTH } from 'constants';
import { ZIP_CODE } from 'constants/validations';

const validationSchema = yup.object().shape({
  country: yup.string().nullable().required(),
  street: yup.string().max(MAX_INPUT_LENGTH).required(),
  apartmentNumber: yup.string().max(MAX_INPUT_LENGTH),
  city: yup.string().max(MAX_INPUT_LENGTH).required(),
  state: yup.string().nullable().required(),
  zipCode: yup
    .string()
    .min(ZIP_CODE.MIN, {
      id: 'validations.minDigits',
      values: {
        min: ZIP_CODE.MIN,
      },
    })
    .max(ZIP_CODE.MAX, {
      id: 'validations.maxDigits',
      values: {
        max: ZIP_CODE.MAX,
      },
    })
    .required(),
});

export default validationSchema;
