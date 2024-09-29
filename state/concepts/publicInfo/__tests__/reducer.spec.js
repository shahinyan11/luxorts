import { HOME_PAGINATION } from 'constants';

import reducer from '../reducer';
import * as types from '../types';

const initialPublicInfoState = {
  pagination: HOME_PAGINATION,
};

describe('PublicInfo reducer', () => {
  describe('pagination reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {}).pagination).toEqual(initialPublicInfoState.pagination);
    });

    it('should handle SET_APARTMENTS_PAGE', () => {
      const action = {
        type: types.SET_APARTMENTS_PAGE,
        pageNumber: 2,
      };

      expect(reducer(undefined, action).pagination).toEqual({ number: 2, size: 3 });
    });
  });
});
