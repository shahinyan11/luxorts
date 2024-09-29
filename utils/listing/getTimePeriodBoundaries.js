import moment from 'moment';

import { DATE_FORMAT } from 'constants';
import isPresent from 'utils/isPresent';

const getTimePeriodBoundaries = (date) => {
  const baseDate = isPresent(date) ? moment(date) : moment();

  return {
    startDate: baseDate.clone().subtract(1, 'months').startOf('months').format(DATE_FORMAT),
    endDate: baseDate.clone().add(1, 'months').endOf('months').format(DATE_FORMAT),
  };
};

export default getTimePeriodBoundaries;
