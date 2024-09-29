import { renderHook } from '@testing-library/react-hooks';

import { userSignOut } from 'state/concepts/session/actions';
import { dispatch } from '__mocks__/react-redux';

import useContainer from '../hook';

describe('UserDropdown useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onLogOutHandler method should dispatches userSignOut action', () => {
    result.current.onLogOutHandler();

    expect(dispatch).toHaveBeenCalledWith(userSignOut());
  });
});
