import React from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
const BookingCalendarDate = ({ label, date }) => {
  const isDozens = label > 9;
  // eslint-disable-next-line react/prop-types
  const currentLabel = isDozens ? label : label.slice(1);
  const isToday = new Date(date).getDate() === new Date().getDate();

  return (
    <span
      className={classNames('booking-calendar__date', {
        'booking-calendar__date--overdue': new Date().getDate() > new Date(date).getDate(),
      })}
    >
      {currentLabel}
      {isToday && <span className="d-none d-md-inline"> Today</span>}
    </span>
  );
};

export default BookingCalendarDate;
