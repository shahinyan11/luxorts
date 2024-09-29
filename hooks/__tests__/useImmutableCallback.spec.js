import { renderHook } from '@testing-library/react-hooks';
import { useCallback } from 'react';

import useImmutableCallback from '../useImmutableCallback';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');

  return {
    ...originReact,
    useCallback: jest.fn(),
  };
});

describe('useImmutableCallback hook', () => {
  const callback = jest.fn();
  renderHook(() => useImmutableCallback(callback));

  it('should calls useCallback with callback and empty array', () => {
    expect(useCallback).toHaveBeenCalledWith(callback, []);
  });
});
