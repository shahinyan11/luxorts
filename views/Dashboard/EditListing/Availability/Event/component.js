import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

import { TIME_PERIOD_KIND } from 'constants/listing';

import SvgIcon from 'views/shared/SvgIcon';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const Event = ({ event, currentDate }) => {
  const isSameMonth = moment(currentDate).isSame(event.start, 'months');

  if (!isSameMonth || event.kind === TIME_PERIOD_KIND.AVAILABLE) {
    return null;
  }

  return (
    <div
      className={classNames('booking-calendar__event', {
        'booking-calendar__event--preparation': event.kind === TIME_PERIOD_KIND.PREPARATION,
        'booking-calendar__event--blocked': event.kind === TIME_PERIOD_KIND.BLOCKED,
        'booking-calendar__event--booked': event.kind === TIME_PERIOD_KIND.BOOKING,
      })}
    >
      {event.description && (
        <p className="booking-calendar__description mb-0">
          {event.icon && <SvgIcon icon={event.icon} className="booking-calendar__icon" />}
          <span className="booking-calendar__text">
            <FormattedOrRawMessage message={event.description} />
          </span>
        </p>
      )}
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    kind: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
    icon: PropTypes.string,
  }).isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default Event;
