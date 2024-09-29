import * as yup from 'yup';

import yupLocale from 'locales/yup';
import minAge from './validations/minAge';
import stringLength from './validations/stringLength';

yup.setLocale(yupLocale);

yup.addMethod(yup.string, 'minAge', minAge);
yup.addMethod(yup.string, 'stringLength', stringLength);

export default yup;
