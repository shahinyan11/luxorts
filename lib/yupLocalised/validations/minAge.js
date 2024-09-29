import moment from 'moment';

import { DATE_FORMAT } from 'constants';

export default function minAge(minValue) {
  // eslint-disable-next-line func-names
  return this.test('minAge', function (date) {
    const age = moment().diff(moment(date, DATE_FORMAT), 'years');

    return age < minValue
      ? this.createError({
          message: {
            id: 'validations.minAge',
            values: {
              years: minValue,
            },
          },
        })
      : true;
  });
}
