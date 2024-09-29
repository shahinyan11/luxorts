import { renderHook } from '@testing-library/react-hooks';

import useCalendarToolbar from '../useCalendarToolbar';

describe('useCalendarToolbar hook', () => {
  const props = {
    onNavigate: jest.fn(),
  };

  const { result } = renderHook(() => useCalendarToolbar(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('navigate method should calls onNavigate with passed action', () => {
    result.current.navigate('action')();

    expect(props.onNavigate).toHaveBeenCalledWith('action');
  });
});
