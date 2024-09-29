import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';

import useContainer from '../hook';

describe('InputNumberField useContainer hook', () => {
  const props = {
    onChange: jest.fn(),
    name: 'name',
  };
  let { result } = renderHook(() => useContainer(props));
  const { setValue } = useFieldFormikHelpers;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onChangeHandler method', () => {
    it('should calls setValue', () => {
      result.current.onChangeHandler('value');

      expect(setValue).toHaveBeenCalledWith('value');
    });

    it('should calls onChange callback if present', () => {
      result.current.onChangeHandler('value');

      expect(props.onChange).toHaveBeenCalledWith('value');
    });

    it('shouldn`t calls onChange callback if isn`t present', () => {
      ({ result } = renderHook(() =>
        useContainer({
          ...props,
          onChange: undefined,
        }),
      ));

      result.current.onChangeHandler('value');

      expect(props.onChange).not.toHaveBeenCalled();
    });
  });
});
