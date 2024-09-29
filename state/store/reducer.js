import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';

import { listingsPersistConfig } from 'constants/reduxPersist';

import * as conceptsReducers from 'state/concepts';
import dataReducer from 'state/data/reducer';
import intlReducer from 'state/intl/reducer';
import flashMessagesReducer from 'state/flash-messages/reducer';
import modalReducer from 'state/modal';

const appReducer = combineReducers({
  ...conceptsReducers,
  listings: persistReducer(listingsPersistConfig, conceptsReducers.listings),
  data: dataReducer,
  intl: intlReducer,
  modal: modalReducer,
  'flash-messages': flashMessagesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };

    return appReducer(nextState, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
