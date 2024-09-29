import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import checkDateInfo from 'utils/checkDateInfo';

const DateHeader = ({ label, date }) => {
  const { isActual, isToday } = checkDateInfo(date);

  return (
    <span
      className={classNames('booking-calendar__date', {
        'booking-calendar__date--overdue': !isActual,
      })}
    >
      {parseInt(label, 10)}
      {isToday && (
        <span className="d-none d-md-inline">
          {' '}
          <FormattedMessage id="shared.today" />
        </span>
      )}
    </span>
  );
};

DateHeader.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DateHeader;
