import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { USER_ROLE } from 'constants';
import ROUTES from 'constants/routes';

import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';

import authenticate from 'lib/authenticate';
import validationSchema from 'lib/yupLocalised/scheme/codeVerification';

import {
  userResendForgotPasswordEmail,
  userValidateForgotPasswordCode,
} from 'state/concepts/session/actions';
import {
  userResendForgotPasswordEmailEndpoint,
  userValidateForgotPasswordCodeEndpoint,
} from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';

function useContainer() {
  const dispatch = useDispatch();
  const onSubmit = useFormSubmit(userValidateForgotPasswordCode);

  const { endpoint } = userValidateForgotPasswordCodeEndpoint;
  const { endpoint: resendEndpoint } = userResendForgotPasswordEmailEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);
  const isResendLoading = useParametricSelector(loadingSelectorCreator, resendEndpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      code: '',
      redirectRoute: ROUTES.NEW_PASSWORD.PATH,
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
  };
}

export const getInitialProps = async (ctx) => {
  const email = ctx.query?.email;
  const isUser = authenticate(USER_ROLE.USER, ctx);
  const isUserLoggedIn = isUserLoggedInSelector(ctx.store.getState());

  if (isUser && (!isPresent(email) || isUserLoggedIn)) {
    redirect(ROUTES.SIGN_IN.PATH, ctx);
  }

  return { email };
};

export default useContainer;
