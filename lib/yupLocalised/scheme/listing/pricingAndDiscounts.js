import yup from 'lib/yupLocalised';
import { MAX_PERCENTS } from 'constants/validations';

const validationSchema = yup.object().shape({
  pricePerDay: yup.number().nullable().required(),
  weeklyDiscount: yup
    .number()
    .nullable()
    .max(MAX_PERCENTS, {
      id: 'yup.number.max',
      values: {
        max: `${MAX_PERCENTS}%`,
      },
    }),
  mounthlyDiscount: yup
    .number()
    .nullable()
    .max(MAX_PERCENTS, {
      id: 'yup.number.max',
      values: {
        max: `${MAX_PERCENTS}%`,
      },
    }),
});

export default validationSchema;
