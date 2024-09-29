import classNames from 'classnames';
import PropTypes from 'prop-types';

import { DATE_FORMAT } from 'constants';

import checkDateInfo from 'utils/checkDateInfo';

const DateCellWrapper = ({ value, pricePerDay, customPrice, children }) => {
  const { momentDate, isActual } = checkDateInfo(value);
  const dateString = momentDate.format(DATE_FORMAT);
  const price = `$${customPrice[dateString] || pricePerDay}`;

  return (
    <div
      className={classNames(children.props.className, {
        'rbc-day-bg--overdue': !isActual,
      })}
    >
      {price}
    </div>
  );
};

DateCellWrapper.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  children: PropTypes.node.isRequired,
  pricePerDay: PropTypes.number.isRequired,
  customPrice: PropTypes.shape().isRequired,
};

export default DateCellWrapper;
