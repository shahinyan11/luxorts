import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

describe('ContactUs useContainer hook', () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
