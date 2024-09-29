import { act, renderHook } from '@testing-library/react-hooks';

import useAntdDropdownVisible from '../useAntdDropdownVisible';

describe('useAntdDropdownVisible hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useAntdDropdownVisible));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onVisibilityChangeHandler method should changes visible local state', () => {
    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(true);
  });
});
