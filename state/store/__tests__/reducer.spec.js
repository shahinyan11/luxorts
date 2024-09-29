import { HYDRATE } from 'next-redux-wrapper';

import reducer from '../reducer';

describe('rootReducer', () => {
  it('should handle HYDRATE', () => {
    const prevState = {
      modal: {
        modalType: 'DEACTIVATE_MODAL',
        modalProps: {},
      },
    };
    const action = {
      type: HYDRATE,
      payload: {
        session: {
          currentUser: {
            id: 1,
          },
        },
      },
    };
    const expectedState = reducer({ ...prevState, ...action.payload }, {});

    expect(reducer(prevState, action)).toEqual(expectedState);
  });
});
