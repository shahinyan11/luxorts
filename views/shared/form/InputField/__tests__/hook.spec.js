import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

describe('InputField useContainer hook', () => {
  const props = { name: 'name', numbersOnly: true };
  const { result } = renderHook(() => useContainer(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onKeyDown method when numbersOnly equals true', () => {
    const event = { key: 'e', preventDefault: jest.fn() };

    it('shouldn`t calls `event.preventDefault()` when symbol is `Tab` ', () => {
      result.current.onKeyDown({
        ...event,
        keyCode: 9, // Tab
      });

      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should calls `event.preventDefault()` when symbol is not a number ', () => {
      result.current.onKeyDown(event);

      expect(event.preventDefault).toHaveBeenCalled();
    });
  });
});
