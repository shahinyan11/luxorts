import cookies from 'next-cookies';

import tokenInterceptor from '../tokenInterceptor';

jest.mock('next-cookies', () =>
  jest.fn(() => ({
    tokens: {
      access: 'new token',
    },
  })),
);

describe('tokenInterceptor()', () => {
  const config = {
    headers: {
      common: { Authorization: null },
    },
  };

  it('when access token is present', () => {
    tokenInterceptor({})(config);

    expect(config.headers.common.Authorization).toEqual('Bearer new token');
  });

  it('when access token isn`t present', () => {
    cookies.mockReturnValueOnce({});
    tokenInterceptor({})(config);

    expect(config.headers.common.Authorization).toEqual(null);
  });
});
