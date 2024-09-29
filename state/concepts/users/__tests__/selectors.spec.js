import { fetchSelfEndpoint } from 'state/concepts/users/endpoints';

import { passwordUpdatedDateSelector } from '../selectors';

describe('Users selectors', () => {
  describe('passwordUpdatedDateSelector()', () => {
    it('returns password updated date', () => {
      const state = {
        data: {
          meta: {
            [fetchSelfEndpoint.endpoint]: { meta: { passwordUpdatedAt: 'date' } },
          },
        },
      };

      expect(passwordUpdatedDateSelector(state)).toEqual('date');
    });
  });
});
