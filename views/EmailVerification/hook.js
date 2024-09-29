import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import ROUTES from 'constants/routes';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';

import checkAuthCompleteness from 'utils/auth/checkAuthCompleteness';
import isPresent from 'utils/isPresent';

import { fetchSelf } from 'state/concepts/users/actions';
import { verifyUserEmail, resendUserEmailVerification } from 'state/concepts/session/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';
import {
  resendUserEmailVerificationEndpoint,
  verifyUserEmailEndpoint,
} from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

import validationSchema from 'lib/yupLocalised/scheme/codeVerification';

function useContainer() {
  const dispatch = useDispatch();
  const onSubmit = useFormSubmit(verifyUserEmail);

  const { endpoint } = verifyUserEmailEndpoint;
  const { endpoint: resendEndpoint } = resendUserEmailVerificationEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);
  const isResendLoading = useParametricSelector(loadingSelectorCreator, resendEndpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      code: '',
      redirectRoute: ROUTES.PHONE_VERIFICATION.PATH,
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Handle resend button click
   */
  const onResendClickHandler = useImmutableCallback(() => {
    dispatch(resendUserEmailVerification());
  });

  return {
    formik,
    isLoading,
    isResendLoading,
    onResendClickHandler,
  };
}

export const getInitialProps = async (ctx) => {
  const isServer = Boolean(ctx.req);
  const currentUser = currentUserSelector(ctx.store.getState());
  const isUserLoggedIn = isPresent(currentUser);

  if (isUserLoggedIn) {
    ctx.store.dispatch(fetchSelf());
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkAuthCompleteness(ctx);
    });
  }

  return {
    currentUser,
  };
};

export default useContainer;
