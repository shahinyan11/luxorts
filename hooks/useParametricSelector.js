import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const helper =
  ({ selector, parameter }) =>
  (state) =>
    selector(state, parameter);

const useParametricSelector = (selectorCreator, parameter) => {
  const selector = useMemo(selectorCreator, [selectorCreator]);
  return useSelector(helper({ selector, parameter }));
};

export default useParametricSelector;
