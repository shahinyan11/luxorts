import { renderHook } from '@testing-library/react-hooks';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));

describe('Header useContainer hook', () => {
  const props = { isSignIn: true, isSignUp: true, isGuest: false };

  const { result } = renderHook(() => useContainer(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
