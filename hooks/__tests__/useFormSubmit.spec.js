import { renderHook } from '@testing-library/react-hooks';

import { userSignUp } from 'state/concepts/session/actions';

import { dispatch } from '__mocks__/react-redux';
import { formik } from '__mocks__/formik';

import useFormSubmit from '../useFormSubmit';

describe('useFormSubmit hook', () => {
  describe('when reset is present', () => {
    const { result } = renderHook(() => useFormSubmit(userSignUp, true));

    it('matches snapshot', () => {
      expect(result.current).toMatchSnapshot();
    });

    it('should dispatch action with values and form params and call formReset()', () => {
      result.current('values', formik);

      expect(dispatch).toHaveBeenCalledWith(userSignUp('values', formik));
      expect(formik.resetForm).toHaveBeenCalled();
    });
  });

  describe('when reset isn`t present', () => {
    const { result } = renderHook(() => useFormSubmit(userSignUp));

    it('matches snapshot', () => {
      expect(result.current).toMatchSnapshot();
    });

    it('should dispatch action with values and form params', () => {
      result.current('values', formik);

      expect(dispatch).toHaveBeenCalledWith(userSignUp('values', formik));
    });
  });
});
