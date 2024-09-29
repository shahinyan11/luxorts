import { useFormik } from 'formik';

import ROUTES from 'constants/routes';
import { PASSWORD_UPDATE_SUCCESS_STATUS } from 'constants/statuses';

import { createRoute } from 'utils/createRouteHelpers';
import redirect from 'utils/redirect';
import isAuth from 'utils/auth/isAuth';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';

import validationSchema from 'lib/yupLocalised/scheme/newPassword';
import { userUpdatePassword } from 'state/concepts/session/actions';
import { userUpdatePasswordEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

function useContainer() {
  const onSubmit = useFormSubmit(userUpdatePassword);

  const { endpoint } = userUpdatePasswordEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  const redirectRoute = createRoute({
    pathname: ROUTES.SIGN_IN.PATH,
    query: {
      password_update: PASSWORD_UPDATE_SUCCESS_STATUS,
    },
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      password: '',
      redirectRoute,
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    isLoading,
  };
}

export const getInitialProps = async (ctx) => {
  const isAuthUser = isAuth(ctx);

  if (isAuthUser) {
    redirect(ROUTES.INDEX.PATH, ctx);
  }
};

export default useContainer;
