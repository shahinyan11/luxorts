export const LISTING_PRIOR_NOTIFIED_TYPE = {
  SAME_DAY: 'same_day',
  ONE_DAY: '1_day',
  TWO_DAYS: '2_days',
  THREE_DAYS: '3_days',
  SEVEN_DAYS: '7_days',
};

export const LISTING_PRIOR_NOTIFIED_OPTIONS = [
  { value: LISTING_PRIOR_NOTIFIED_TYPE.SAME_DAY, label: { id: 'shared.sameDay' } },
  {
    value: LISTING_PRIOR_NOTIFIED_TYPE.ONE_DAY,
    label: { id: 'shared.dayNumber', values: { number: 1 } },
  },
  {
    value: LISTING_PRIOR_NOTIFIED_TYPE.TWO_DAYS,
    label: { id: 'shared.dayNumberPlural', values: { number: 2 } },
  },
  {
    value: LISTING_PRIOR_NOTIFIED_TYPE.THREE_DAYS,
    label: { id: 'shared.dayNumberPlural', values: { number: 3 } },
  },
  {
    value: LISTING_PRIOR_NOTIFIED_TYPE.SEVEN_DAYS,
    label: { id: 'shared.dayNumberPlural', values: { number: 7 } },
  },
];

export const LISTING_IN_ADVANCE_BOOKING_TYPE = {
  ANY_TIME: 'any_time',
  THREE_MONTHS: '3_months_in_advance',
  SIX_MONTHS: '6_months_in_advance',
  NINE_MONTHS: '9_months_in_advance',
  ONE_YEAR: '1_year',
  UNAVAILABLE: 'unavailable',
};

export const LISTING_IN_ADVANCE_BOOKING_OPTIONS = [
  { value: LISTING_IN_ADVANCE_BOOKING_TYPE.ANY_TIME, label: { id: 'shared.anyTime' } },
  {
    value: LISTING_IN_ADVANCE_BOOKING_TYPE.THREE_MONTHS,
    label: { id: 'shared.numberMonthsInAdvance', values: { number: 3 } },
  },
  {
    value: LISTING_IN_ADVANCE_BOOKING_TYPE.SIX_MONTHS,
    label: { id: 'shared.numberMonthsInAdvance', values: { number: 6 } },
  },
  {
    value: LISTING_IN_ADVANCE_BOOKING_TYPE.NINE_MONTHS,
    label: { id: 'shared.numberMonthsInAdvance', values: { number: 9 } },
  },
  {
    value: LISTING_IN_ADVANCE_BOOKING_TYPE.ONE_YEAR,
    label: { id: 'shared.yearNumber', values: { number: 1 } },
  },
  {
    value: LISTING_IN_ADVANCE_BOOKING_TYPE.UNAVAILABLE,
    label: { id: 'shared.datesUnavailableByDefault' },
  },
];

export const LISTING_RESERVATION_PREFERENCES_VALIDATION = {
  GUESTS_STAY_TIME: {
    MIN: 1,
    MAX: 30,
  },
  PREPARATION_TIME: 0,
};

export const LISTING_PREPARATION_TIME_OPTIONS = [
  {
    value: 0,
    label: { id: 'shared.none' },
  },
  {
    value: 1,
    label: { id: 'shared.blockNumberNightBeforeAndAfterEachReservation', values: { number: 1 } },
  },
  {
    value: 2,
    label: { id: 'shared.blockNumberNightBeforeAndAfterEachReservation', values: { number: 2 } },
  },
];

export const LISTING_APPROVAL_POLICY_TYPE = {
  INSTANT_BOOK: 'instant_book',
  TWENTY_FOUR_HOURS_REVIEW: '24_hours_review',
};

export const LISTING_APPROVAL_POLICY_OPTIONS = [
  {
    value: LISTING_APPROVAL_POLICY_TYPE.INSTANT_BOOK,
    label: { id: 'shared.instantBook' },
    description: { id: 'shared.allowsBookingImmediately' },
  },
  {
    value: LISTING_APPROVAL_POLICY_TYPE.TWENTY_FOUR_HOURS_REVIEW,
    label: { id: 'shared.24HourReview' },
    description: { id: 'shared.allows24Hours' },
  },
];

export const LISTING_CANCELLATION_POLICY_TYPE = {
  FLEXIBLE: 'flexible',
  MODERATE: 'moderate',
  STRICT: 'strict',
};

export const LISTING_CANCELLATION_POLICY_OPTIONS = [
  {
    value: LISTING_CANCELLATION_POLICY_TYPE.FLEXIBLE,
    label: { id: 'shared.flexible' },
    description: { id: 'shared.fullRefundNumberDay', values: { number: 1 } },
  },
  {
    value: LISTING_CANCELLATION_POLICY_TYPE.MODERATE,
    label: { id: 'shared.moderate' },
    description: { id: 'shared.fullRefundNumberDay', values: { number: 5 } },
  },
  {
    value: LISTING_CANCELLATION_POLICY_TYPE.STRICT,
    label: { id: 'shared.strict' },
    description: { id: 'shared.percentsRefundUpUntil', values: { percents: '50%' } },
  },
];
