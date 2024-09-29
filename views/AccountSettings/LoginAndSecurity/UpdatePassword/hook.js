import { useCallback } from 'react';
import { useFormik } from 'formik';

import validationSchema from 'lib/yupLocalised/scheme/updatePassword';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import { loadingSelectorCreator } from 'state/data/selectors';
import { userChangePassword } from 'state/concepts/session/actions';
import { userChangePasswordEndpoint } from 'state/concepts/session/endpoints';

function useContainer({ onCancel }) {
  const onSubmit = useFormSubmit(userChangePassword);
  const { endpoint } = userChangePasswordEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      currentPassword: '',
      newPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  /**
   *  Form submit and change update mode
   */
  const handleSubmit = useCallback(async () => {
    if (!formik.isValid) {
      await formik.setFieldTouched('currentPassword', true, true);
      await formik.setFieldTouched('newPassword', true, true);

      return;
    }

    formik.handleSubmit();
    onCancel();
  }, [formik, onCancel]);

  return {
    formik,
    handleSubmit,
    isLoading,
  };
}

export default useContainer;
