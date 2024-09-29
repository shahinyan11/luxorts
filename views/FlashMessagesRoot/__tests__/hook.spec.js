import { renderHook } from '@testing-library/react-hooks';

import { useSelector } from '__mocks__/react-redux';
import useContainer from '../hook';

useSelector.mockReturnValueOnce({
  1: {
    id: '1',
    duration: 3,
    messageType: 'success',
  },
});

describe('FlashMessagesRoot useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
