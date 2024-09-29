import { renderHook } from '@testing-library/react-hooks';

import { dispatch } from '__mocks__/react-redux';

import { userResendUpdateEmail } from 'state/concepts/session/actions';

import useContainer from '../hook';

describe('UpdateEmailModal useContainer hook', () => {
  let result = null;
  const props = { email: 'email' };

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onResendClickHandler method should dispatch userResendUpdateEmail action', () => {
    result.current.onResendClickHandler();

    expect(dispatch).toHaveBeenCalledWith(userResendUpdateEmail());
  });
});
