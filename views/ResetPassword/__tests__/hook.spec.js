import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));

describe('ResetPassword useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
