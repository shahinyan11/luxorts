import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';

import useContainer from '../hook';

describe('SelectField useContainer hook', () => {
  const { result } = renderHook(() => useContainer({ name: 'name' }));
  const { setTouched, setValue } = useFieldFormikHelpers;

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('should calls setTouched when calls `onBlurHandler` method', () => {
    result.current.onBlurHandler();

    expect(setTouched).toHaveBeenCalledWith(true);
  });

  it('should calls setValue when calls `onChangeHandler` method', () => {
    result.current.onChangeHandler('value');

    expect(setValue).toHaveBeenCalledWith('value');
  });
});
