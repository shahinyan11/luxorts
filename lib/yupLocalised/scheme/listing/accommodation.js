import yup from 'lib/yupLocalised';
import { ACCOMMODATION_VALIDATION } from 'constants/listing';

const validationSchema = yup.object().shape({
  guestsNumber: yup
    .number()
    .nullable()
    .required({
      id: 'validations.minGuests',
      values: {
        min: ACCOMMODATION_VALIDATION.BASE.MIN,
      },
    }),
  listingBedrooms: yup
    .number()
    .nullable()
    .required({
      id: 'validations.minRooms',
      values: {
        min: ACCOMMODATION_VALIDATION.BASE.MIN,
      },
    }),
  bedsAmount: yup
    .number()
    .nullable()
    .required({
      id: 'validations.minBeds',
      values: {
        min: ACCOMMODATION_VALIDATION.BASE.MIN,
      },
    }),
  listingBathrooms: yup
    .number()
    .nullable()
    .required({
      id: 'validations.minBathrooms',
      values: {
        min: ACCOMMODATION_VALIDATION.BASE.MIN,
      },
    }),
});

export default validationSchema;
