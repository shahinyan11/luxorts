import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';

import useContainer from '../hook';

describe('SwitchField useContainer hook', () => {
  const { result } = renderHook(() => useContainer({ name: 'name' }));
  const { setValue } = useFieldFormikHelpers;

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('should calls setValue when calls `onChangeHandler` method', () => {
    result.current.onChangeHandler(true);

    expect(setValue).toHaveBeenCalledWith(true);
  });
});
