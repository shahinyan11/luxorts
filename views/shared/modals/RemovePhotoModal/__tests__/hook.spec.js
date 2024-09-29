import { renderHook } from '@testing-library/react-hooks';

import { userRemoveAvatar } from 'state/concepts/session/actions';
import { store } from '__mocks__/react-redux';

import useContainer from '../hook';

describe('RemovePhotoModal useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('handleRemove method dispatches userRemoveAvatar action', () => {
    result.current.handleRemove();

    expect(store.dispatch).toHaveBeenCalledWith(userRemoveAvatar());
  });
});
