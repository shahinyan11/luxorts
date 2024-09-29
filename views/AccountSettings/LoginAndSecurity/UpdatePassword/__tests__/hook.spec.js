import { renderHook } from '@testing-library/react-hooks';

import { formik } from '__mocks__/formik';

import useContainer from '../hook';

describe('UpdatePassword useContainer hook', () => {
  let result;
  const props = { onCancel: jest.fn() };

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('handleSubmit method', () => {
    it('calls formik.handleSubmit when the form is valid', async () => {
      await result.current.handleSubmit();

      expect(formik.handleSubmit).toHaveBeenCalled();
    });

    it('calls formik.setFieldTouched when the form is not valid', async () => {
      formik.isValid = false;

      ({ result } = renderHook(() => useContainer(props)));

      await result.current.handleSubmit();

      expect(formik.setFieldTouched).toHaveBeenCalledWith('currentPassword', true, true);
      expect(formik.setFieldTouched).toHaveBeenCalledWith('newPassword', true, true);
    });
  });
});
