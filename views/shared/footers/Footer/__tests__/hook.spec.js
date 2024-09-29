import { renderHook } from '@testing-library/react-hooks';

import { dispatch } from '__mocks__/react-redux';
import { showModal } from 'state/modal/actions';

import useContainer from '../hook';

describe('Footer useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('handleDeactivateClick method should dispatch showModal action', () => {
    result.current.handleDeactivateClick();

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'DEACTIVATE_ACCOUNT_MODAL',
      }),
    );
  });
});
