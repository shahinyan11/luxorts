import { act, renderHook } from '@testing-library/react-hooks';

import { formik } from '__mocks__/formik';

import useContainer from '../hook';

describe('FieldWrapper useContainer hook', () => {
  let result = null;
  const props = {
    changeMode: true,
    fieldNames: ['firstName', 'lastName'],
  };

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('toggleEditMode method should toggles editMode state value', () => {
    act(() => {
      result.current.toggleEditMode();
    });

    expect(result.current.editMode).toBe(!result.editMode);
  });

  describe('onSave method', () => {
    it('should calls formik.handleSubmit and sets edit mode to false when errors are`nt presents', async () => {
      await act(async () => {
        await result.current.onSave();
      });

      expect(formik.handleSubmit).toHaveBeenCalled();
      expect(result.current.editMode).toBe(false);
    });

    it('should calls formik.setFieldTouched when errors are presents', async () => {
      formik.validateForm.mockReturnValueOnce({ foo: 'bar' });

      ({ result } = renderHook(() => useContainer(props)));

      await act(async () => {
        await result.current.onSave();
      });

      expect(formik.setFieldTouched).toHaveBeenCalledWith('foo', true);
    });
  });
});
