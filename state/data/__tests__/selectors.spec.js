import {
  endpointMetaSelector,
  lastPageSelector,
  linksSelector,
  loadingSelector,
  loadingSelectorCreator,
  metaSelectorCreator,
  newPhoneSelector,
  passwordUpdatedAtSelector,
  selfPageSelector,
  totalCountSelector,
} from '../selectors';

describe('Data selectors', () => {
  describe('loadingSelector()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { loading: true },
          endpoint1: { loading: false },
        },
      },
    };

    it('returns endpoint loading state', () => {
      expect(loadingSelector(state, 'endpoint')).toEqual(true);
      expect(loadingSelector(state, 'endpoint1')).toEqual(false);
      expect(loadingSelector(state, 'endpoint2')).toEqual(undefined);
    });
  });

  describe('metaSelectorCreator()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { loading: true },
          endpoint1: { loading: false },
        },
      },
    };

    const metaSelector = metaSelectorCreator();

    it('returns endpoint state', () => {
      expect(metaSelector(state, 'endpoint')).toEqual(state.data.meta.endpoint);
      expect(metaSelector(state, 'endpoint1')).toEqual(state.data.meta.endpoint1);
      expect(metaSelector(state, 'endpoint2')).toEqual(undefined);
    });
  });

  describe('loadingSelectorCreator()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { loading: true },
          endpoint1: { loading: false },
        },
      },
    };

    const selector = loadingSelectorCreator();

    it('returns endpoint loading state', () => {
      expect(selector(state, 'endpoint')).toEqual(true);
      expect(selector(state, 'endpoint1')).toEqual(false);
      expect(selector(state, 'endpoint2')).toEqual(false);
    });
  });

  describe('endpointMetaSelector()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { meta: 'meta' },
        },
      },
    };

    it('returns endpoint meta data', () => {
      expect(endpointMetaSelector(state, 'endpoint')).toEqual('meta');
    });
  });

  describe('linksSelector()', () => {
    const state = {
      data: {
        meta: {
          endpoint: { links: 'links' },
        },
      },
    };

    it('returns endpoint links data', () => {
      expect(linksSelector(state, 'endpoint')).toEqual('links');
    });
  });

  describe('totalCountSelector', () => {
    const state = {
      data: {
        meta: {
          endpoint: { meta: { total: 10 } },
        },
      },
    };

    it('returns total count', () => {
      expect(totalCountSelector(state, 'endpoint')).toEqual(10);
    });
  });

  describe('lastPageSelector', () => {
    const state = {
      data: {
        meta: {
          endpoint: { links: { last: 7 } },
        },
      },
    };

    it('returns last page', () => {
      expect(lastPageSelector(state, 'endpoint')).toEqual(7);
    });
  });

  describe('selfPageSelector', () => {
    const state = {
      data: {
        meta: {
          endpoint: { links: { self: 1 } },
        },
      },
    };

    it('returns self page', () => {
      expect(selfPageSelector(state, 'endpoint')).toEqual(1);
    });
  });

  describe('newPhoneSelector', () => {
    const state = {
      data: {
        meta: {
          endpoint: { meta: { newPhone: 'phone' } },
        },
      },
    };

    it('returns new phone number', () => {
      expect(newPhoneSelector(state, 'endpoint')).toEqual('phone');
    });
  });

  describe('passwordUpdatedAtSelector', () => {
    const state = {
      data: {
        meta: {
          endpoint: { meta: { passwordUpdatedAt: 'date' } },
        },
      },
    };

    it('returns password updated date', () => {
      expect(passwordUpdatedAtSelector(state, 'endpoint')).toEqual('date');
    });
  });
});
