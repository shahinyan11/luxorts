import { renderHook } from '@testing-library/react-hooks';

import { dispatch } from '__mocks__/react-redux';

import { userResendUpdatePhone } from 'state/concepts/session/actions';

import useContainer from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  userNewPhoneSelector: jest.fn(() => 'phone'),
}));

describe('PhoneNumberConfirm useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onResendClickHandler method should dispatch userResendUpdatePhone action', () => {
    result.current.onResendClickHandler();

    expect(dispatch).toHaveBeenCalledWith(userResendUpdatePhone());
  });
});
