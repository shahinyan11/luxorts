import { useFormik } from 'formik';

import ROUTES from 'constants/routes';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';

import { userSendForgotPasswordEmail } from 'state/concepts/session/actions';
import { userSendForgotPasswordEmailEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/resetPassword';

function useContainer() {
  const onSubmit = useFormSubmit(userSendForgotPasswordEmail);

  const { endpoint } = userSendForgotPasswordEmailEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      email: '',
      redirectRoute: ROUTES.RECOVER_PASSWORD.PATH,
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
