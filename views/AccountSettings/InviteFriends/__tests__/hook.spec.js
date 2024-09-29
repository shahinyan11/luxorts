import { renderHook } from '@testing-library/react-hooks';

import { dispatch, store } from '__mocks__/react-redux';

import checkUserVerification from 'utils/auth/checkUserVerification';

import mockedUserInvitation from 'views/__mocks__/mockedUserInvitation';
import mockedPagination from 'views/__mocks__/mockedPagination';

import { fetchUserInvitation, setInvitationsPage } from 'state/concepts/session/actions';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification');
jest.mock('state/concepts/session/selectors', () => ({
  userInvitationSelector: jest.fn(() => mockedUserInvitation),
  paginationSelector: jest.fn(() => mockedPagination),
  userInvitationCountSelector: jest.fn(() => 1),
}));

describe('InviteFriends useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onPageChange method must dispatch setInvitationsPage and fetchUserInvitation actions', () => {
    const page = 1;

    result.current.onPageChange(page);

    expect(store.dispatch).toHaveBeenCalledWith(setInvitationsPage(page));
    expect(store.dispatch).toHaveBeenCalledWith(fetchUserInvitation());
  });

  describe('getInitialProps method', () => {
    const ctx = { store };

    it('should dispatches action fetchUserInvitation when user is verified', async () => {
      checkUserVerification.mockReturnValueOnce(true);

      await getInitialProps(ctx);

      expect(dispatch).toHaveBeenCalledWith(fetchUserInvitation());
    });

    it('shouldn`t dispatches action when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);
    });
  });
});
