import { v4 as uuid } from 'uuid';

import ROUTES from 'constants/routes';

export const LISTING_STEP_STATUS = {
  INITIAL: 'initial',
  ACCOMODATION: 'accomodation',
  LOCATION: 'location',
  LOCATION_MAP: 'location_map',
  AMENITIES: 'amenities',
  CAPABILITIES: 'capabilities',
  SERVICES: 'services',
  PHOTOS: 'photos',
  DESCRIPTION: 'description',
  HOUSE_RULES: 'house_rules',
  PREFERENCES: 'preferences',
  AVAILABILITY: 'availability',
  PRICING: 'pricing',
  FINISHED: 'finished',
};

export const LISTING_PATH_BY_STATUS = {
  [LISTING_STEP_STATUS.INITIAL]: ROUTES.ADD_NEW_LISTING.INDEX.PATH,
  [LISTING_STEP_STATUS.ACCOMODATION]: ROUTES.ADD_NEW_LISTING.ACCOMMODATION.PATH,
  [LISTING_STEP_STATUS.LOCATION]: ROUTES.ADD_NEW_LISTING.LOCATION.PATH,
  [LISTING_STEP_STATUS.LOCATION_MAP]: ROUTES.ADD_NEW_LISTING.LOCATION_MAP.PATH,
  [LISTING_STEP_STATUS.AMENITIES]: ROUTES.ADD_NEW_LISTING.AMENITIES.PATH,
  [LISTING_STEP_STATUS.CAPABILITIES]: ROUTES.ADD_NEW_LISTING.CAPABILITIES.PATH,
  [LISTING_STEP_STATUS.SERVICES]: ROUTES.ADD_NEW_LISTING.SERVICES.PATH,
  [LISTING_STEP_STATUS.PHOTOS]: ROUTES.ADD_NEW_LISTING.PHOTOS.PATH,
  [LISTING_STEP_STATUS.DESCRIPTION]: ROUTES.ADD_NEW_LISTING.DESCRIPTION.PATH,
  [LISTING_STEP_STATUS.HOUSE_RULES]: ROUTES.ADD_NEW_LISTING.HOUSE_RULES.PATH,
  [LISTING_STEP_STATUS.PREFERENCES]: ROUTES.ADD_NEW_LISTING.RESERVATION_PREFERENCES.PATH,
  [LISTING_STEP_STATUS.AVAILABILITY]: ROUTES.ADD_NEW_LISTING.AVAILABILITY.PATH,
  [LISTING_STEP_STATUS.PRICING]: ROUTES.ADD_NEW_LISTING.PRICING_AND_DISCOUNTS.PATH,
  [LISTING_STEP_STATUS.FINISHED]: ROUTES.ADD_NEW_LISTING.PUBLISH.PATH,
};

export const LISTING_PROGRESS_BY_STATUS = {
  [LISTING_STEP_STATUS.INITIAL]: 14,
  [LISTING_STEP_STATUS.ACCOMODATION]: 20,
  [LISTING_STEP_STATUS.LOCATION]: 26,
  [LISTING_STEP_STATUS.LOCATION_MAP]: 32,
  [LISTING_STEP_STATUS.AMENITIES]: 38,
  [LISTING_STEP_STATUS.CAPABILITIES]: 44,
  [LISTING_STEP_STATUS.SERVICES]: 50,
  [LISTING_STEP_STATUS.PHOTOS]: 56,
  [LISTING_STEP_STATUS.DESCRIPTION]: 62,
  [LISTING_STEP_STATUS.HOUSE_RULES]: 68,
  [LISTING_STEP_STATUS.PREFERENCES]: 74,
  [LISTING_STEP_STATUS.AVAILABILITY]: 80,
  [LISTING_STEP_STATUS.PRICING]: 86,
  [LISTING_STEP_STATUS.FINISHED]: 100,
};

export const LISTING_PLACE_TYPE = {
  ENTIRE_ROOM: 'entire_room',
  PRIVATE_PLACE: 'private_place',
  SHARED_ROOM: 'shared_room',
};

export const LISTING_PLACE_OPTIONS = [
  { value: LISTING_PLACE_TYPE.ENTIRE_ROOM, label: { id: 'shared.entirePlace' } },
  { value: LISTING_PLACE_TYPE.PRIVATE_PLACE, label: { id: 'shared.privateRoom' } },
  { value: LISTING_PLACE_TYPE.SHARED_ROOM, label: { id: 'shared.sharedRoom' } },
];

export const ACCOMMODATION_VALIDATION = {
  BASE: {
    MIN: 1,
    MAX: 16,
  },
  ARRANGEMENT: {
    MIN: 0,
    MAX: 16,
  },
};

export const BED_TYPE = {
  QUEEN: 'queen',
  SINGLE: 'single',
  DOUBLE: 'double',
  SOFA_BED: 'sofa_bed',
};

export const BED_NAME_BY_TYPE = {
  [BED_TYPE.DOUBLE]: { id: 'shared.double' },
  [BED_TYPE.QUEEN]: { id: 'shared.queen' },
  [BED_TYPE.SINGLE]: { id: 'shared.single' },
  [BED_TYPE.SOFA_BED]: { id: 'shared.sofaBed' },
};

export const LISTING_DEFAULT_BEDS = [
  {
    uuid: uuid(),
    kind: BED_TYPE.DOUBLE,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
  {
    uuid: uuid(),
    kind: BED_TYPE.QUEEN,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
  {
    uuid: uuid(),
    kind: BED_TYPE.SINGLE,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
  {
    uuid: uuid(),
    kind: BED_TYPE.SOFA_BED,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
];

export const DEFAULT_BEDROOM_CONFIG = {
  defaultBeds: LISTING_DEFAULT_BEDS,
  customBeds: [],
  bedsForDeleting: [],
};

export const INITIAL_BEDROOM = {
  uuid: uuid(),
  ...DEFAULT_BEDROOM_CONFIG,
};

export const BATH_TYPE = {
  BATHTUB: 'bathtub',
  SHOWER: 'shower',
  JETTED_TUB: 'jetted_tub',
  DOUBLE_VANITY: 'double_vanity',
};

export const BATH_NAME_BY_TYPE = {
  [BATH_TYPE.BATHTUB]: { id: 'shared.bathtub' },
  [BATH_TYPE.SHOWER]: { id: 'shared.shower' },
  [BATH_TYPE.JETTED_TUB]: { id: 'shared.jettedTub' },
  [BATH_TYPE.DOUBLE_VANITY]: { id: 'shared.doubleVanity' },
};

export const LISTING_DEFAULT_BATHS = [
  {
    uuid: uuid(),
    kind: BATH_TYPE.BATHTUB,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
  {
    uuid: uuid(),
    kind: BATH_TYPE.SHOWER,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
  {
    uuid: uuid(),
    kind: BATH_TYPE.JETTED_TUB,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
  {
    uuid: uuid(),
    kind: BATH_TYPE.DOUBLE_VANITY,
    amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
  },
];

export const DEFAULT_BATHROOM_CONFIG = {
  defaultBaths: LISTING_DEFAULT_BATHS,
  customBaths: [],
  bathsForDeleting: [],
};

export const INITIAL_BATHROOM = {
  uuid: uuid(),
  ...DEFAULT_BATHROOM_CONFIG,
};

export const LISTING_STATUS = {
  IN_DRAFT: 'in_draft',
  ON_MODERATION: 'on_moderation',
  UNPUBLISHED: 'unpublished',
  PUBLISHED: 'published',
  BLOCKED: 'blocked',
  DELETED: 'deleted',
};

export const TIME_PERIOD_KIND = {
  AVAILABLE: 'available',
  BLOCKED: 'blocked',
  BOOKING: 'booking',
  PREPARATION: 'preparation',
};

export const TIME_PERIOD_DESCRIPTION_BY_KIND = {
  [TIME_PERIOD_KIND.BLOCKED]: { id: 'shared.blocked' },
  [TIME_PERIOD_KIND.PREPARATION]: { id: 'shared.preparationTime' },
  [TIME_PERIOD_KIND.BOOKING]: { id: 'shared.booked' },
};

export const TIME_PERIOD_ICON_BY_KIND = {
  [TIME_PERIOD_KIND.BLOCKED]: 'clock',
  [TIME_PERIOD_KIND.PREPARATION]: 'clock',
  [TIME_PERIOD_KIND.BOOKING]: 'clock',
};

export const LISTING_IMAGE_PLACEHOLDER = '/images/housing-preview-01.png';
