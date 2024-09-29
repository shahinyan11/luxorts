import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';

import useContainer from '../hook';

describe('CurrencyInputField useContainer hook', () => {
  const { result } = renderHook(() => useContainer({ name: 'name' }));
  const { setValue } = useFieldFormikHelpers;

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onValueChangeHandler method', () => {
    it('should calls setValue with value when value is present', () => {
      result.current.onValueChangeHandler('value');

      expect(setValue).toHaveBeenCalledWith('value');
    });

    it('should calls setValue with null when value isn`t present', () => {
      result.current.onValueChangeHandler(undefined);

      expect(setValue).toHaveBeenCalledWith(null);
    });
  });
});
