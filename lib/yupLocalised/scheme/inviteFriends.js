import yup from 'lib/yupLocalised';

import { MAX_INPUT_LENGTH } from 'constants';

const validationSchema = yup.object().shape({
  userInvitations: yup.array().of(yup.string().email().max(MAX_INPUT_LENGTH)),
});

export default validationSchema;
