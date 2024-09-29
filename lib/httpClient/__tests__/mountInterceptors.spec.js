import { mergeDeepRight } from 'ramda';

import mountInterceptors from '../mountInterceptors';

jest.mock('../tokenInterceptor', () => jest.fn(() => 'tokenInterceptor'));
jest.mock('../refreshInterceptor', () => jest.fn(() => 'refreshInterceptor'));

describe('mountInterceptors()', () => {
  const ctx = {
    store: {
      httpClient: {
        interceptors: {
          request: {
            use: jest.fn(),
          },
          response: {
            use: jest.fn(),
            handlers: [],
          },
        },
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should apply interceptors when handlers aren`t present', () => {
    mountInterceptors(ctx);

    expect(ctx.store.httpClient.interceptors.response.use).toHaveBeenCalledWith(
      null,
      'refreshInterceptor',
    );
    expect(ctx.store.httpClient.interceptors.request.use).toHaveBeenCalledWith(
      'tokenInterceptor',
      null,
    );
  });

  it('shouldn`t apply interceptors when handlers are present', () => {
    mountInterceptors(
      mergeDeepRight(ctx, {
        store: {
          httpClient: {
            interceptors: {
              response: {
                handlers: [jest.fn()],
              },
            },
          },
        },
      }),
    );

    expect(ctx.store.httpClient.interceptors.response.use).not.toHaveBeenCalled();
    expect(ctx.store.httpClient.interceptors.request.use).not.toHaveBeenCalled();
  });
});
