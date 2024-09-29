import { mergeDeepRight, omit, compose, filter, path } from 'ramda';

import { USER_ACCOUNT_ENTITIES } from 'constants';
import * as types from 'state/data/types';
import { USER_SIGN_OUT } from 'state/concepts/session/types';

const initialState = {
  meta: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_API_REQUEST:
      return mergeDeepRight(state, {
        meta: { [action.endpoint]: { loading: true } },
      });
    case types.DATA_API_SUCCESS:
      return mergeDeepRight(
        state,
        mergeDeepRight(action.response, {
          meta: { [action.endpoint]: { loading: false } },
        }),
      );
    case types.DATA_API_FAILURE:
      return mergeDeepRight(state, {
        meta: { [action.endpoint]: { loading: false } },
      });
    case types.DATA_DELETE:
      return { ...state, [action.kind]: omit(action.ids, state[action.kind]) };
    case types.DATA_DELETE_ENTITY: {
      return { ...state, [action.kind]: {} };
    }
    case types.DATA_REMOVE_RELATIONSHIP:
      return mergeDeepRight(state, {
        [action.kind]: {
          [action.ownerId]: {
            relationships: {
              [action.relationship]: {
                data: compose(
                  filter((item) => !action.ids.includes(item.id)),
                  path([action.kind, action.ownerId, 'relationships', action.relationship, 'data']),
                )(state),
              },
            },
          },
        },
      });
    case USER_SIGN_OUT: {
      return omit(USER_ACCOUNT_ENTITIES, state);
    }
    default:
      return state;
  }
};

export default dataReducer;
