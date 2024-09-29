import { renderHook } from '@testing-library/react-hooks';

import { store } from '__mocks__/react-redux';

import { userResendInvite } from 'state/concepts/session/actions';

import useContainer from '../hook';

describe('InviteItem useContainer hook', () => {
  let result = null;
  const props = { id: 'testId' };

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('resendHandler method must dispatch userResendInvite action', () => {
    result.current.resendHandler();

    expect(store.dispatch).toHaveBeenCalledWith(userResendInvite(props.id));
  });
});
