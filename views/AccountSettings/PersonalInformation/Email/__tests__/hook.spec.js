import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

describe('Email useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
