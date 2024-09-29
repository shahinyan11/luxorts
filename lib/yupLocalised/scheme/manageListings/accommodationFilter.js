import yup from 'lib/yupLocalised';
import { LISTING_FILTER_KEY } from 'constants/listing/manageListings';

const validationSchema = yup.object().shape({
  [LISTING_FILTER_KEY.GUESTS_NUMBER_EQ]: yup.number().nullable().required(),
  [LISTING_FILTER_KEY.BEDROOMS_AMOUNT_EQ]: yup.number().nullable().required(),
  [LISTING_FILTER_KEY.BEDS_AMOUNT_EQ]: yup.number().nullable().required(),
  [LISTING_FILTER_KEY.BATHROOMS_AMOUNT_EQ]: yup.number().nullable().required(),
});

export default validationSchema;
