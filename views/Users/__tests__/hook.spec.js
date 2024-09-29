import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

describe('Users useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
