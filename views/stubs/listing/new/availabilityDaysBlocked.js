import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Progress, Button } from 'antd';
import MainHeader from '../../layout/header';

const AvailabilityCalendarToolbar = () => (
  <div className="d-flex justify-content-space-between mb-24">
    <p className="text-headline-2 mb-0">January 2022</p>
    <Button type="button" className="main-text-btn">
      Block this month
    </Button>
  </div>
);

const localizer = momentLocalizer(moment);
const events = [
  {
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 2),
    status: 'overdue',
    dayOfMonth: 1,
  },
  {
    start: new Date(2022, 3, 2),
    end: new Date(2022, 3, 3),
    status: 'overdue',
    dayOfMonth: 2,
  },
  {
    start: new Date(2022, 3, 3),
    end: new Date(2022, 3, 4),
    status: 'overdue',
    dayOfMonth: 3,
  },
  {
    start: new Date(2022, 3, 4),
    end: new Date(2022, 3, 5),
    status: 'overdue',
    dayOfMonth: 4,
  },
  {
    start: new Date(2022, 3, 5),
    end: new Date(2022, 3, 6),
    status: 'today',
    dayOfMonth: 5,
  },
  {
    start: new Date(2022, 3, 6),
    end: new Date(2022, 3, 7),
    status: 'blocked',
    dayOfMonth: 6,
  },
  {
    start: new Date(2022, 3, 7),
    end: new Date(2022, 3, 8),
    status: 'blocked',
    dayOfMonth: 7,
  },
  {
    start: new Date(2022, 3, 8),
    end: new Date(2022, 3, 9),
    status: 'blocked',
    dayOfMonth: 8,
  },
  {
    start: new Date(2022, 3, 9),
    end: new Date(2022, 3, 10),
    status: 'blocked',
    dayOfMonth: 9,
  },
  {
    start: new Date(2022, 3, 10),
    end: new Date(2022, 3, 11),
    status: 'blocked',
    dayOfMonth: 10,
  },
  {
    start: new Date(2022, 3, 11),
    end: new Date(2022, 3, 12),
    status: 'blocked',
    dayOfMonth: 11,
  },
  {
    start: new Date(2022, 3, 12),
    end: new Date(2022, 3, 13),
    status: 'blocked',
    dayOfMonth: 12,
  },
  {
    start: new Date(2022, 3, 13),
    end: new Date(2022, 3, 14),
    status: 'blocked',
    dayOfMonth: 13,
  },
  {
    start: new Date(2022, 3, 14),
    end: new Date(2022, 3, 15),
    status: 'blocked',
    dayOfMonth: 14,
  },
  {
    start: new Date(2022, 3, 15),
    end: new Date(2022, 3, 16),
    status: 'blocked',
    dayOfMonth: 15,
  },
  {
    start: new Date(2022, 3, 16),
    end: new Date(2022, 3, 17),
    status: 'available',
    dayOfMonth: 16,
  },
  {
    start: new Date(2022, 3, 17),
    end: new Date(2022, 3, 18),
    status: 'available',
    dayOfMonth: 17,
  },
  {
    start: new Date(2022, 3, 18),
    end: new Date(2022, 3, 19),
    status: 'available',
    dayOfMonth: 18,
  },
  {
    start: new Date(2022, 3, 19),
    end: new Date(2022, 3, 20),
    status: 'available',
    dayOfMonth: 19,
  },
  {
    start: new Date(2022, 3, 20),
    end: new Date(2022, 3, 21),
    status: 'available',
    dayOfMonth: 20,
  },
  {
    start: new Date(2022, 3, 21),
    end: new Date(2022, 3, 22),
    status: 'available',
    dayOfMonth: 21,
  },
  {
    start: new Date(2022, 3, 22),
    end: new Date(2022, 3, 23),
    status: 'available',
    dayOfMonth: 22,
  },
  {
    start: new Date(2022, 3, 23),
    end: new Date(2022, 3, 24),
    status: 'available',
    dayOfMonth: 23,
  },
  {
    start: new Date(2022, 3, 24),
    end: new Date(2022, 3, 25),
    status: 'available',
    dayOfMonth: 24,
  },
  {
    start: new Date(2022, 3, 25),
    end: new Date(2022, 3, 26),
    status: 'available',
    dayOfMonth: 25,
  },
  {
    start: new Date(2022, 3, 26),
    end: new Date(2022, 3, 27),
    status: 'available',
    dayOfMonth: 26,
  },
  {
    start: new Date(2022, 3, 27),
    end: new Date(2022, 3, 28),
    status: 'available',
    dayOfMonth: 27,
  },
  {
    start: new Date(2022, 3, 28),
    end: new Date(2022, 3, 29),
    status: 'available',
    dayOfMonth: 28,
  },
  {
    start: new Date(2022, 3, 29),
    end: new Date(2022, 3, 30),
    status: 'available',
    dayOfMonth: 29,
  },
  {
    start: new Date(2022, 3, 30),
    end: new Date(2022, 3, 31),
    status: 'available',
    dayOfMonth: 30,
  },
  {
    start: new Date(2022, 3, 31),
    end: new Date(2022, 4, 1),
    status: 'available',
    dayOfMonth: 31,
  },
];

const AvailabilityDayEvent = ({ event }) => (
  <div
    className={classNames('aviability-calendar__event', {
      'aviability-calendar__event--overdue': event.status === 'overdue',
      'aviability-calendar__event--blocked': event.status === 'blocked',
      'aviability-calendar__event--today': event.status === 'today',
    })}
  >
    <p className="aviability-calendar__counter mb-0">{event.dayOfMonth}</p>
  </div>
);

const components = {
  toolbar: AvailabilityCalendarToolbar,
  month: {
    event: AvailabilityDayEvent,
  },
};

const AvailabilityDaysBlocked = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Availability" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-8">
          <h1 className="new-listing__title mb-8">Set availability</h1>
          <p className="new-listing__description mb-32">
            Just select a date to block or unblock it. You can always make changes after you
            publish.
          </p>
        </div>
        <div className="calendar-legend mb-32">
          <div className="calendar-legend__item">
            <p className="calendar-legend__sign m-0">N</p>
            <p className="calendar-legend__description m-0">Available</p>
          </div>
          <div className="calendar-legend__item">
            <p className="calendar-legend__sign calendar-legend__sign--blocked m-0">N</p>
            <p className="calendar-legend__description m-0">Blocked</p>
          </div>
        </div>
        <Calendar
          className="aviability-calendar mb-32"
          events={events}
          localizer={localizer}
          components={components}
          date={new Date(2022, 3, 5)}
        />
        <div className="new-listing__footer pt-24 pb-24">
          <div className="new-listing__container d-flex justify-content-space-between">
            <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140">
              Back
            </Button>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140 ml-auto">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

AvailabilityDayEvent.propTypes = {
  event: PropTypes.shape({
    status: PropTypes.string,
    dayOfMonth: PropTypes.number,
  }).isRequired,
};

export default AvailabilityDaysBlocked;
