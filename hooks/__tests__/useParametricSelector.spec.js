import { renderHook } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import useParametricSelector, { helper } from '../useParametricSelector';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');

  return {
    ...originReact,
    useMemo: jest.fn(() => jest.fn()),
  };
});

useSelector.mockReturnValueOnce('value');

describe('useParametricSelector hook', () => {
  const { result } = renderHook(() => useParametricSelector('selectorCreator', 'parameter'));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('should call useMemo with selectorCreator', () => {
    expect(useMemo).toHaveBeenCalledWith('selectorCreator', ['selectorCreator']);
  });

  it('should call useSelector', () => {
    expect(useSelector).toHaveBeenCalledWith(expect.any(Function));
  });

  it('tests helper for useSelector', () => {
    const selector = jest.fn();
    const callback = helper({ selector, parameter: 'parameter' });
    callback('state');

    expect(selector).toHaveBeenCalledWith('state', 'parameter');
  });
});
