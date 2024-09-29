import { SORT_DIRECTIONS } from '../index';
import { LISTING_STATUS } from './index';

export const LISTING_TAG_BY_STATUS = {
  [LISTING_STATUS.IN_DRAFT]: {
    TITLE: { id: 'shared.draft' },
    CLASSNAME: 'tag--draft',
  },
  [LISTING_STATUS.ON_MODERATION]: {
    TITLE: { id: 'shared.onModeration' },
    CLASSNAME: 'tag--warning',
  },
  [LISTING_STATUS.UNPUBLISHED]: { TITLE: { id: 'shared.unpublished' }, CLASSNAME: 'tag--cancel' },
  [LISTING_STATUS.PUBLISHED]: {
    TITLE: { id: 'shared.published' },
    CLASSNAME: 'tag--success',
  },
  [LISTING_STATUS.BLOCKED]: { TITLE: { id: 'shared.blocked' }, CLASSNAME: 'tag--error' },
  [LISTING_STATUS.DELETED]: { TITLE: { id: 'shared.removed' }, CLASSNAME: 'tag--error' },
};

export const LISTING_PAGINATION = { number: 1, size: 8 };

export const LISTING_SORT_KEY = {
  BEDROOMS_AMOUNT: 'bedrooms_amount',
  BEDS_AMOUNT: 'beds_amount',
  BATHROOMS_AMOUNT: 'bathrooms_amount',
  GUESTS_NUMBER: 'guests_number',
  LOCATION: 'location',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
  STATUS: 'status',
};

export const LISTING_SORT = {
  sortKey: LISTING_SORT_KEY.UPDATED_AT,
  direction: SORT_DIRECTIONS.DESCEND,
};

export const LISTING_TABLE_COLUMNS_KEY = {
  LISTING: 'listing',
  HIDDEN_TITLE: 'hiddenTitle',
  GUESTS: 'guests',
  BEDROOMS: 'bedrooms',
  BEDS: 'beds',
  BATHS: 'baths',
  LOCATION: 'location',
  DATE_CREATED: 'dateCreated',
  LAST_UPDATED: 'lastUpdated',
  STATUS: 'status',
  SETTINGS: 'settings',
};

export const LISTING_TABLE_SETTINGS = [
  {
    key: LISTING_TABLE_COLUMNS_KEY.LISTING,
    label: { id: 'shared.listing' },
    props: { fixed: 'left', width: 364 },
    hiddenInSettings: true,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.HIDDEN_TITLE,
    label: { id: 'shared.hiddenTitle' },
    props: { width: 280 },
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.GUESTS,
    label: { id: 'shared.guests' },
    props: { width: 100 },
    sortKey: LISTING_SORT_KEY.GUESTS_NUMBER,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.BEDROOMS,
    label: { id: 'shared.bedrooms' },
    width: 120,
    sortKey: LISTING_SORT_KEY.BEDROOMS_AMOUNT,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.BEDS,
    label: { id: 'shared.beds' },
    props: { width: 89 },
    sortKey: LISTING_SORT_KEY.BEDS_AMOUNT,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.BATHS,
    label: { id: 'shared.baths' },
    props: { width: 94 },
    sortKey: LISTING_SORT_KEY.BATHROOMS_AMOUNT,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.LOCATION,
    label: { id: 'shared.location' },
    props: { width: 240 },
    sortKey: LISTING_SORT_KEY.LOCATION,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.DATE_CREATED,
    label: { id: 'shared.dateCreated' },
    props: { width: 137 },
    sortKey: LISTING_SORT_KEY.CREATED_AT,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.LAST_UPDATED,
    label: { id: 'shared.lastUpdated' },
    props: { width: 138 },
    sortKey: LISTING_SORT_KEY.UPDATED_AT,
  },
  {
    key: LISTING_TABLE_COLUMNS_KEY.STATUS,
    label: { id: 'shared.status' },
    props: { width: 134 },
    sortKey: LISTING_SORT_KEY.STATUS,
  },
];

export const LISTING_TABLE_DEFAULT_COLUMNS_SETTINGS = [
  LISTING_TABLE_COLUMNS_KEY.LISTING,
  LISTING_TABLE_COLUMNS_KEY.HIDDEN_TITLE,
  LISTING_TABLE_COLUMNS_KEY.GUESTS,
  LISTING_TABLE_COLUMNS_KEY.BEDROOMS,
  LISTING_TABLE_COLUMNS_KEY.BEDS,
  LISTING_TABLE_COLUMNS_KEY.BATHS,
  LISTING_TABLE_COLUMNS_KEY.LOCATION,
  LISTING_TABLE_COLUMNS_KEY.DATE_CREATED,
  LISTING_TABLE_COLUMNS_KEY.LAST_UPDATED,
  LISTING_TABLE_COLUMNS_KEY.STATUS,
];

export const LISTING_FILTER_KEY = {
  STATUS_IN: 'status-in',
  BEDS_AMOUNT_EQ: 'beds_amount-eq',
  GUESTS_NUMBER_EQ: 'guests_number-eq',
  BATHROOMS_AMOUNT_EQ: 'bathrooms_amount-eq',
  BEDROOMS_AMOUNT_EQ: 'bedrooms_amount-eq',
  AMENITIES_IN: 'amenities-in',
};

export const ACCOMMODATION_LISTING_FILTER_KEYS = [
  LISTING_FILTER_KEY.BEDS_AMOUNT_EQ,
  LISTING_FILTER_KEY.GUESTS_NUMBER_EQ,
  LISTING_FILTER_KEY.BATHROOMS_AMOUNT_EQ,
  LISTING_FILTER_KEY.BEDROOMS_AMOUNT_EQ,
];

export const LISTING_FILTERS = {
  [LISTING_FILTER_KEY.STATUS_IN]: [],
  [LISTING_FILTER_KEY.BEDS_AMOUNT_EQ]: 0,
  [LISTING_FILTER_KEY.GUESTS_NUMBER_EQ]: 0,
  [LISTING_FILTER_KEY.BATHROOMS_AMOUNT_EQ]: 0,
  [LISTING_FILTER_KEY.BEDROOMS_AMOUNT_EQ]: 0,
  [LISTING_FILTER_KEY.AMENITIES_IN]: [],
};

export const ACCOMMODATION_VALIDATION = {
  MIN: 0,
  MAX: 16,
};

export const LISTING_STATUS_OPTIONS = [
  {
    label: { id: 'shared.published' },
    value: LISTING_STATUS.PUBLISHED,
  },
  {
    label: { id: 'shared.unpublished' },
    value: LISTING_STATUS.UNPUBLISHED,
  },
  {
    label: { id: 'shared.onModeration' },
    value: LISTING_STATUS.ON_MODERATION,
  },
  {
    label: { id: 'shared.draft' },
    value: LISTING_STATUS.IN_DRAFT,
  },
  {
    label: { id: 'shared.blocked' },
    value: LISTING_STATUS.BLOCKED,
  },
];

export const SUCCESS_MESSAGE_BY_STATUS = {
  [LISTING_STATUS.UNPUBLISHED]: { description: { id: 'listing.status.modal.unpublish.success' } },
  [LISTING_STATUS.PUBLISHED]: { description: { id: 'listing.status.modal.publish.success' } },
  [LISTING_STATUS.DELETED]: { description: { id: 'listing.status.modal.remove.success' } },
};

export const SUCCESS_MODAL_BY_STATUS = {
  [LISTING_STATUS.ON_MODERATION]: { modalType: 'PUBLISH_LISTING_MODAL' },
};
