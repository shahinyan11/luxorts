import { renderHook } from '@testing-library/react-hooks';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
  userNewPhoneSelector: jest.fn(() => 'phone'),
}));

describe('PhoneNumber useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
