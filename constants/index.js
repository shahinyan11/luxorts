import ROUTES from 'constants/routes';

export const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000';
export const API_VERSION = '/api/v1';
export const SESSION_REFRESH_ROUTE = `${API_HOST}${API_VERSION}/user_account/session`;

export const USER_ROLE = {
  USER: 'user',
  GUEST: 'guest',
};

export const USER_TYPE = {
  TRAVELLER: 'traveller_account',
  HOST: 'host_account',
};

export const USER_VERIFIED_STATUS = {
  UNVERIFIED: 'unverified',
  EMAIL_VERIFIED: 'email_verified',
  PHONE_VERIFIED: 'phone_verified',
};

export const USER_LOGIN_REDIRECT_BY_STATUS = {
  [USER_VERIFIED_STATUS.UNVERIFIED]: ROUTES.EMAIL_VERIFICATION.PATH,
  [USER_VERIFIED_STATUS.EMAIL_VERIFIED]: ROUTES.PHONE_VERIFICATION.PATH,
  [USER_VERIFIED_STATUS.PHONE_VERIFIED]: ROUTES.INDEX.PATH,
};

export const DATE_FORMAT = 'DD/MM/YYYY';

export const DATE_FORMAT_WITH_TIME = 'MM/DD/YYYY [at] HH:MM A';

export const EMAIL_PLACEHOLDER = 'jeremy.bogan@gmail.com';

export const DEFAULT_COUNTRY_CODE = 'US';

export const MAX_INPUT_LENGTH = 255;

export const MAX_MESSAGE_LENGTH = 1000;

export const USER_ACCOUNT_ENTITIES = ['hostAccount', 'userProfile', 'travellerAccount'];

export const SPECIAL_CHARACTERS = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

export const DIRECTION = {
  DOWN: 'down',
};

export const ANTD_CLASSNAME = {
  INPUT_NUMBER: 'ant-input-number-input',
};

export const APPROVED = 'APPROVED';

export const NOT_APPROVED = 'NOT_APPROVED';

export const RADIO_GROUP_PAID_OPTIONS = [
  {
    value: false,
    label: { id: 'shared.free' },
    className: 'ant-radio-wrapper--positive',
  },
  {
    value: true,
    label: { id: 'shared.paid' },
    className: 'ant-radio-wrapper--negative',
  },
];

export const FORM_DATA_CONFIG = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export const TIME_OPTIONS = [
  { value: '6:00 AM', label: { id: 'shared.timeAm', values: { time: 6 } } },
  { value: '7:00 AM', label: { id: 'shared.timeAm', values: { time: 7 } } },
  { value: '8:00 AM', label: { id: 'shared.timeAm', values: { time: 8 } } },
  { value: '9:00 AM', label: { id: 'shared.timeAm', values: { time: 9 } } },
  { value: '10:00 AM', label: { id: 'shared.timeAm', values: { time: 10 } } },
  { value: '11:00 AM', label: { id: 'shared.timeAm', values: { time: 11 } } },
  { value: '12:00 PM', label: { id: 'shared.timePm', values: { time: 12 } } },
  { value: '1:00 PM', label: { id: 'shared.timePm', values: { time: 1 } } },
  { value: '2:00 PM', label: { id: 'shared.timePm', values: { time: 2 } } },
  { value: '3:00 PM', label: { id: 'shared.timePm', values: { time: 3 } } },
  { value: '4:00 PM', label: { id: 'shared.timePm', values: { time: 4 } } },
  { value: '5:00 PM', label: { id: 'shared.timePm', values: { time: 5 } } },
  { value: '6:00 PM', label: { id: 'shared.timePm', values: { time: 6 } } },
  { value: '7:00 PM', label: { id: 'shared.timePm', values: { time: 7 } } },
  { value: '8:00 PM', label: { id: 'shared.timePm', values: { time: 8 } } },
  { value: '9:00 PM', label: { id: 'shared.timePm', values: { time: 9 } } },
  { value: '10:00 PM', label: { id: 'shared.timePm', values: { time: 10 } } },
  { value: '11:00 PM', label: { id: 'shared.timePm', values: { time: 11 } } },
  { value: '12:00 AM', label: { id: 'shared.timeAm', values: { time: 12 } } },
  { value: '1:00 AM', label: { id: 'shared.timeAm', values: { time: 1 } } },
  { value: '2:00 AM', label: { id: 'shared.timeAm', values: { time: 2 } } },
  { value: '3:00 AM', label: { id: 'shared.timeAm', values: { time: 3 } } },
  { value: '4:00 AM', label: { id: 'shared.timeAm', values: { time: 4 } } },
  { value: '5:00 AM', label: { id: 'shared.timeAm', values: { time: 5 } } },
];

export const DAYS_IN = {
  WEEK: 7,
  MONTH: 31,
};

export const RECOVER = 'recover';

export const PAGE = {
  number: 1,
  size: 20,
};

export const AVATAR_SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export const SORT_DIRECTIONS = {
  ASCEND: 'ascend',
  DESCEND: 'descend',
};

export const INVITATION_STATUSES = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
};

export const HOME_PAGINATION = {
  number: 1,
  size: 3,
};

export const TRENDING_LOCATION_IMAGES = [
  '/images/trending-location-01.jpg',
  '/images/trending-location-02.jpg',
  '/images/trending-location-03.jpg',
  '/images/trending-location-04.jpg',
  '/images/trending-location-05.jpg',
];

export const PROPERTY_TYPE_IMAGES = [
  '/images/property-01.jpg',
  '/images/property-02.jpg',
  '/images/property-03.jpg',
  '/images/property-04.jpg',
];

export const SUPPORT_EMAIL = 'support@luxorts.com';

export const LANDING_TYPES = {
  POLICY: 'privacy_policy',
  TERMS: 'terms_of_service',
};
