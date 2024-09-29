import { renderHook } from '@testing-library/react-hooks';

import { dispatch } from '__mocks__/react-redux';

import { userResendForgotPasswordEmail } from 'state/concepts/session/actions';

import useContainer from '../hook';

describe('RecoverPasswordModal useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onResendClickHandler method should dispatch userResendForgotPasswordEmail action', () => {
    result.current.onResendClickHandler();

    expect(dispatch).toHaveBeenCalledWith(userResendForgotPasswordEmail());
  });
});
