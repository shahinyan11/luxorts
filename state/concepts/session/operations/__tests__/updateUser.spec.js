import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import updateUser from '../updateUser';

jest.mock('utils/setCookieIsomorphic');
jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));

describe('updateUser operation', () => {
  it('matches snapshot', () => {
    expect(updateUser).toMatchSnapshot();
  });

  it('should calls setCookieIsomorphic with currentUser', () => {
    updateUser.process({ getState: jest.fn() }, null, jest.fn());

    expect(setCookieIsomorphic).toHaveBeenCalledWith(
      null,
      'currentUser',
      JSON.stringify(mockedCurrentUser),
    );
  });
});
