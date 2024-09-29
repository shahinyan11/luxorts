import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { RECOVER } from 'constants';
import ROUTES from 'constants/routes';

import validationSchema from 'lib/yupLocalised/scheme/codeVerification';

import { createRoute } from 'utils/createRouteHelpers';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';

import { loadingSelectorCreator } from 'state/data/selectors';
import { currentUserSelector } from 'state/concepts/session/selectors';
import {
  userResendForgotPasswordEmail,
  userValidateForgotPasswordCode,
} from 'state/concepts/session/actions';
import {
  userResendForgotPasswordEmailEndpoint,
  userValidateForgotPasswordCodeEndpoint,
} from 'state/concepts/session/endpoints';

function useContainer() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const onSubmit = useFormSubmit(userValidateForgotPasswordCode);

  const { endpoint } = userValidateForgotPasswordCodeEndpoint;
  const { endpoint: resendEndpoint } = userResendForgotPasswordEmailEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);
  const isResendLoading = useParametricSelector(loadingSelectorCreator, resendEndpoint);

  const redirectRoute = createRoute({
    pathname: ROUTES.ACCOUNT_SETTINGS.LOGIN_AND_SECURITY.PATH,
    query: {
      action: RECOVER,
    },
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      code: '',
      redirectRoute,
      isModal: true,
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Handle resend button click
   */
  const onResendClickHandler = useImmutableCallback(() => {
    dispatch(userResendForgotPasswordEmail());
  });

  return {
    formik,
    isLoading,
    isResendLoading,
    onResendClickHandler,
    email: currentUser.email,
  };
}

export default useContainer;
