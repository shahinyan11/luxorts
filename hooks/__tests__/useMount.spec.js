import { renderHook } from '@testing-library/react-hooks';
import { useEffect } from 'react';

import useMount from '../useMount';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');

  return {
    ...originReact,
    useEffect: jest.fn(),
  };
});

describe('useMount hook', () => {
  const callback = jest.fn();
  renderHook(() => useMount(callback));

  it('should call useEffect with callback and empty array', () => {
    expect(useEffect).toHaveBeenCalledWith(callback, []);
  });
});
