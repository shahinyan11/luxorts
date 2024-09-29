import serverCookie from 'cookie';
import clientCookie from 'component-cookie';

import setCookieIsomorphic from '../setCookieIsomorphic';

jest.mock('component-cookie', () => jest.fn());

describe('setCookieIsomorphic()', () => {
  const { window } = global;
  const name = 'test';
  const value = { testObjectKey: 'test object value' };
  const options = {};
  const res = {
    setHeader: jest.fn(),
  };

  afterAll(() => {
    global.window = window;
  });

  it('sets cookie on SSR', () => {
    delete global.window;

    setCookieIsomorphic({ res }, name, value, options);

    expect(res.setHeader).toHaveBeenCalledWith(
      'Set-Cookie',
      serverCookie.serialize(name, value, options),
    );
  });

  it('sets cookie in browser', () => {
    global.window = window;

    setCookieIsomorphic({ res }, name, value, options);

    expect(clientCookie).toHaveBeenCalledWith(name, value, options);
  });
});
