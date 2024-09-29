import { renderHook } from '@testing-library/react-hooks';

import useFormattedOrRawMessage from '../useFormattedOrRawMessage';

describe('useFormattedOrRawMessage hook', () => {
  const { result } = renderHook(useFormattedOrRawMessage);

  it('matches snapshot when message is object', () => {
    expect(result.current({ id: 'message.id' })).toMatchSnapshot();
  });

  it('matches snapshot when message is string', () => {
    expect(result.current('message')).toMatchSnapshot();
  });
});
