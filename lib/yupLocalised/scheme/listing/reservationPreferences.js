import { equals } from 'ramda';

import yup from 'lib/yupLocalised';
import { LISTING_PRIOR_NOTIFIED_TYPE } from 'constants/listing/reservationPreferences';

const validationSchema = yup.object().shape({
  priorNotified: yup.string().required(),
  priorNotifiedTime: yup.string().when('priorNotified', {
    is: equals(LISTING_PRIOR_NOTIFIED_TYPE.SAME_DAY),
    then: yup.string().nullable().required(),
    otherwise: yup.string().nullable(),
  }),
  checkinStart: yup.string().nullable().required(),
  checkinEnd: yup.string().nullable().required(),
  inAdvanceBooking: yup.string().nullable().required(),
  minNights: yup.number().nullable().required(),
  maxNights: yup.number().nullable().required(),
  approvalPolicy: yup.string().nullable().required(),
  cancellationPolicy: yup.string().nullable().required(),
});

export default validationSchema;
