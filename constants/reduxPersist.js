import storage from 'redux-persist/lib/storage';

// eslint-disable-next-line import/prefer-default-export
export const listingsPersistConfig = {
  key: 'listings',
  whitelist: ['listingTableSettings'],
  storage,
};
