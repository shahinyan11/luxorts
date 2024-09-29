import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const BookingDayEvent = ({ event }) => (
  <div
    className={classNames('booking-calendar__event', {
      'booking-calendar__event--overdue': event.status === 'overdue',
      'booking-calendar__event--preparation': event.status === 'preparation',
      'booking-calendar__event--blocked': event.status === 'blocked',
      'booking-calendar__event--booked': event.status === 'booked',
      'booking-calendar__event--available': event.status === 'available',
    })}
  >
    {event.title && <h2 className="booking-calendar__event-title">{event.title}</h2>}
    {event.price && <p className="booking-calendar__price mb-0">{event.price}</p>}
    {event.description && (
      <p className="booking-calendar__description mb-0">
        {event.icon && <SvgIcon icon={event.icon} className="booking-calendar__icon" />}
        {event.img && (
          <img
            alt=""
            width="24"
            height="24"
            src={`/images/${event.img}`}
            className="booking-calendar__image"
          />
        )}
        <span className="booking-calendar__text">{event.description}</span>
      </p>
    )}
  </div>
);

BookingDayEvent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default BookingDayEvent;
