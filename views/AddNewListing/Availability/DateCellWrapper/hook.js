import { compose, includes, pathOr } from 'ramda';

import { DATE_FORMAT } from 'constants';

import checkDateInfo from 'utils/checkDateInfo';

function useContainer({ value, children, listingBlockedTimePeriods }) {
  const { isActual, isToday, momentDate } = checkDateInfo(value);

  // calculate cell day state
  const isBlocked = includes(momentDate.format(DATE_FORMAT), listingBlockedTimePeriods);
  const isAnotherMonth = compose(
    includes('rbc-off-range-bg'),
    pathOr('', ['props', 'className']),
  )(children);
  const isSelectedCell = compose(
    includes('rbc-selected-cell'),
    pathOr('', ['props', 'className']),
  )(children);

  return {
    isActual,
    isBlocked,
    isToday,
    isAnotherMonth,
    isSelectedCell,
  };
}

export default useContainer;
