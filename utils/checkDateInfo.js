import moment from 'moment';

const checkDateInfo = (date) => {
  const now = moment();
  const momentDate = moment(date);
  const prevDay = moment().subtract(1, 'days').endOf('day');

  const isSameMonth = now.isSame(date, 'month');
  const isActual = momentDate > prevDay;
  const isToday = isSameMonth && momentDate.format('D') === now.format('D');

  return {
    momentDate,
    isActual,
    isToday,
  };
};

export default checkDateInfo;
