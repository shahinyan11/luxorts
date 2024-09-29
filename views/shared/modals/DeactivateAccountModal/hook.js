import { useFormik } from 'formik';

import validationSchema from 'lib/yupLocalised/scheme/currentPassword';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';
import { loadingSelectorCreator } from 'state/data/selectors';
import { userAccountDeactivationEndpoint } from 'state/concepts/session/endpoints';
import { userDeactivateAccount } from 'state/concepts/session/actions';

function useContainer() {
  const onSubmit = useFormSubmit(userDeactivateAccount);
  const { endpoint } = userAccountDeactivationEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    isLoading,
  };
}

export default useContainer;
