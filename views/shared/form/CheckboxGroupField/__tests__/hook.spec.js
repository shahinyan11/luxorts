import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';

import useContainer from '../hook';

describe('CheckboxGroupField useContainer hook', () => {
  const { result } = renderHook(() => useContainer({ name: 'name' }));
  const { setValue } = useFieldFormikHelpers;

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onChangeHandler method should calls setValue with passed value', () => {
    result.current.onChangeHandler('value');

    expect(setValue).toHaveBeenCalledWith('value');
  });
});
