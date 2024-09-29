import { renderHook } from '@testing-library/react-hooks';

import { router } from '__mocks__/next/router';

import useContainer from '../hook';

describe('RecoverPassword useContainer hook', () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onCancel method calls router.back', () => {
    result.current.onCancel();

    expect(router.back).toHaveBeenCalled();
  });
});
