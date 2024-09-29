import { renderHook } from '@testing-library/react-hooks';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import checkUserVerification from 'utils/auth/checkUserVerification';

import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));
jest.mock('utils/auth/checkUserVerification');

describe('PersonalInformation useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('getInitialProps method calls checkUserVerification with ctx', () => {
    const ctx = {};

    getInitialProps(ctx);

    expect(checkUserVerification).toHaveBeenCalledWith(ctx);
  });
});
