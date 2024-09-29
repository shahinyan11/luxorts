import classNames from 'classnames';
import PropTypes from 'prop-types';

import useContainer from './hook';

const DateCellWrapper = ({ value, ...props }) => {
  const { isToday, isActual, isBlocked, isAnotherMonth, isSelectedCell } = useContainer({
    value,
    ...props,
  });

  return (
    <div
      className={classNames('rbc-day-bg', {
        'rbc-off-range-bg': isAnotherMonth,
        'rbc-selected-cell': isSelectedCell && isActual && !isAnotherMonth,
      })}
    >
      <div
        className={classNames('aviability-calendar__event', {
          'aviability-calendar__event--today': isToday,
          'aviability-calendar__event--overdue': !isActual,
          'aviability-calendar__event--blocked': isBlocked && !isAnotherMonth,
        })}
      >
        {!isAnotherMonth && <p className="aviability-calendar__counter mb-0">{value.getDate()}</p>}
      </div>
    </div>
  );
};

DateCellWrapper.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.node.isRequired,
  listingBlockedTimePeriods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DateCellWrapper;
