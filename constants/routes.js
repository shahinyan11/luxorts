import createPathWithId from 'utils/createPathWithId';

const ADD_NEW_LISTING_PREFIX = '/add-new-listing';
const ACCOUNT_SETTINGS_PREFIX = '/account-settings';
const DASHBOARD_PREFIX = '/dashboard';
const DASHBOARD_LISTINGS_PREFIX = `${DASHBOARD_PREFIX}/listings`;

const ROUTES = {
  INDEX: {
    KEY: 'INDEX',
    PATH: '/',
  },
  SIGN_UP: {
    KEY: 'SIGN_UP',
    PATH: '/sign-up',
  },
  SIGN_IN: {
    KEY: 'SIGN_IN',
    PATH: '/sign-in',
  },
  EMAIL_VERIFICATION: {
    KEY: 'EMAIL_VERIFICATION',
    PATH: '/email-verification',
  },
  PHONE_VERIFICATION: {
    KEY: 'PHONE_VERIFICATION',
    PATH: '/phone-verification',
  },
  TERMS: {
    KEY: 'TERMS',
    PATH: '/terms-of-service',
  },
  POLICY: {
    KEY: 'POLICY',
    PATH: '/privacy-policy',
  },
  RESET_PASSWORD: {
    KEY: 'RESET_PASSWORD',
    PATH: '/reset-password',
  },
  RECOVER_PASSWORD: {
    KEY: 'RECOVER_PASSWORD',
    PATH: '/recover-password',
  },
  NEW_PASSWORD: {
    KEY: 'NEW_PASSWORD',
    PATH: '/new-password',
  },
  SUPPORT: {
    KEY: 'SUPPORT',
    PATH: '/support',
  },
  ADD_NEW_LISTING: {
    INDEX: {
      KEY: 'INDEX',
      PATH: ADD_NEW_LISTING_PREFIX,
    },
    PROPERTY_TYPE: {
      KEY: 'PROPERTY_TYPE',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'property-type'),
    },
    ACCOMMODATION: {
      KEY: 'ACCOMMODATION',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'accommodation'),
    },
    LOCATION: {
      KEY: 'LOCATION',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'location'),
    },
    LOCATION_MAP: {
      KEY: 'LOCATION_MAP',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'location-map'),
    },
    AMENITIES: {
      KEY: 'AMENITIES',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'amenities'),
    },
    CAPABILITIES: {
      KEY: 'CAPABILITIES',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'capabilities'),
    },
    SERVICES: {
      KEY: 'SERVICES',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'services'),
    },
    PHOTOS: {
      KEY: 'PHOTOS',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'photos'),
    },
    DESCRIPTION: {
      KEY: 'DESCRIPTION',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'description'),
    },
    HOUSE_RULES: {
      KEY: 'HOUSE_RULES',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'house-rules'),
    },
    RESERVATION_PREFERENCES: {
      KEY: 'RESERVATION_PREFERENCES',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'reservation-preferences'),
    },
    AVAILABILITY: {
      KEY: 'AVAILABILITY',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'availability'),
    },
    PRICING_AND_DISCOUNTS: {
      KEY: 'PRICING_AND_DISCOUNTS',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'pricing-and-discounts'),
    },
    PUBLISH: {
      KEY: 'PUBLISH',
      PATH: createPathWithId(ADD_NEW_LISTING_PREFIX, 'publish'),
    },
  },
  ACCOUNT_SETTINGS: {
    INDEX: {
      KEY: 'INDEX',
      PATH: ACCOUNT_SETTINGS_PREFIX,
    },
    PERSONAL_INFORMATION: {
      KEY: 'PERSONAL_INFORMATION',
      PATH: `${ACCOUNT_SETTINGS_PREFIX}/personal-information`,
    },
    LOGIN_AND_SECURITY: {
      KEY: 'LOGIN_AND_SECURITY',
      PATH: `${ACCOUNT_SETTINGS_PREFIX}/login-and-security`,
    },
    INVITE_FRIENDS: {
      KEY: 'INVITE_FRIENDS',
      PATH: `${ACCOUNT_SETTINGS_PREFIX}/invite-friends`,
    },
  },
  DASHBOARD: {
    INDEX: {
      KEY: 'INDEX',
      PATH: DASHBOARD_PREFIX,
      META: {
        TITLE: { id: 'shared.dashboard' },
      },
    },
    MESSAGES: {
      KEY: 'MESSAGES',
      PATH: `${DASHBOARD_PREFIX}/messages`,
      META: {
        TITLE: { id: 'shared.messages' },
      },
    },
    BOOKINGS: {
      KEY: 'BOOKINGS',
      PATH: `${DASHBOARD_PREFIX}/bookings`,
      META: {
        TITLE: { id: 'shared.bookings' },
      },
    },
    CALENDAR: {
      KEY: 'CALENDAR',
      PATH: `${DASHBOARD_PREFIX}/calendar`,
      META: {
        TITLE: { id: 'shared.calendar' },
      },
    },
    LISTINGS: {
      KEY: 'LISTINGS',
      PATH: DASHBOARD_LISTINGS_PREFIX,
      META: {
        TITLE: { id: 'shared.listings' },
      },
      PROPERTY_TYPE: {
        KEY: 'PROPERTY_TYPE',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'property-type'),
        META: {
          TITLE: { id: 'shared.propertyType' },
        },
      },
      ACCOMMODATION: {
        KEY: 'ACCOMMODATION',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'accommodation'),
        META: {
          TITLE: { id: 'shared.accommodation' },
        },
      },
      LOCATION: {
        KEY: 'LOCATION',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'location'),
        META: {
          TITLE: { id: 'shared.location' },
        },
      },
      LOCATION_MAP: {
        KEY: 'LOCATION_MAP',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'location-map'),
        META: {
          TITLE: { id: 'shared.locationMap' },
        },
      },
      AMENITIES: {
        KEY: 'AMENITIES',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'amenities'),
        META: {
          TITLE: { id: 'shared.amenities' },
        },
      },
      CAPABILITIES: {
        KEY: 'CAPABILITIES',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'capabilities'),
        META: {
          TITLE: { id: 'shared.capabilities' },
        },
      },
      SERVICES: {
        KEY: 'SERVICES',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'services'),
        META: {
          TITLE: { id: 'shared.services' },
        },
      },
      PHOTOS: {
        KEY: 'PHOTOS',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'photos'),
        META: {
          TITLE: { id: 'shared.photos' },
        },
      },
      DESCRIPTION: {
        KEY: 'DESCRIPTION',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'description'),
        META: {
          TITLE: { id: 'shared.description' },
        },
      },
      HOUSE_RULES: {
        KEY: 'HOUSE_RULES',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'house-rules'),
        META: {
          TITLE: { id: 'shared.houseRules' },
        },
      },
      RESERVATION_PREFERENCES: {
        KEY: 'RESERVATION_PREFERENCES',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'reservation-preferences'),
        META: {
          TITLE: { id: 'shared.reservationPreferences' },
        },
      },
      AVAILABILITY: {
        KEY: 'AVAILABILITY',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'availability'),
        META: {
          TITLE: { id: 'shared.availabilityAndPricing' },
        },
      },
      PRICING_AND_DISCOUNTS: {
        KEY: 'PRICING_AND_DISCOUNTS',
        PATH: createPathWithId(DASHBOARD_LISTINGS_PREFIX, 'pricing-and-discounts'),
        META: {
          TITLE: { id: 'shared.pricingAndDiscounts' },
        },
      },
    },
    REVIEWS: {
      KEY: 'REVIEWS',
      PATH: `${DASHBOARD_PREFIX}/reviews`,
      META: {
        TITLE: { id: 'shared.reviews' },
      },
    },
    REPORTS: {
      KEY: 'REPORTS',
      PATH: `${DASHBOARD_PREFIX}/reports`,
      META: {
        TITLE: { id: 'shared.reports' },
      },
    },
    HELP: {
      KEY: 'HELP',
      PATH: `${DASHBOARD_PREFIX}/help`,
      META: {
        TITLE: { id: 'shared.help' },
      },
    },
  },
  LISTING: {
    KEY: 'LISTING',
    PATH: '/listing/[id]',
  },
  ABOUT_US: {
    KEY: 'ABOUT_US',
    PATH: '/about-us',
  },
  CONTACT_US: {
    KEY: 'CONTACT_US',
    PATH: '/contact-us',
  },
  FAQ: {
    KEY: 'FAQ',
    PATH: '/faq',
  },
};

export const AUTH_ROUTES = [ROUTES.SIGN_UP.PATH, ROUTES.SIGN_IN.PATH];

export default ROUTES;
