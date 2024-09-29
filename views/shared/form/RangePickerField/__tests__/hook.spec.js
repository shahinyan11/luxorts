import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';
import useContainer from '../hook';

describe('RangePickerField useContainer hook', () => {
  const { result } = renderHook(() => useContainer({ name: 'name' }));
  const { setTouched, setValue } = useFieldFormikHelpers;

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('test `onBlurHandler` method', () => {
    result.current.onBlurHandler();

    expect(setTouched).toHaveBeenCalledWith(true);
  });

  it('test `onChangeHandler` method', () => {
    result.current.onChangeHandler(null, 'dateString');

    expect(setValue).toHaveBeenCalledWith('dateString');
  });
});
