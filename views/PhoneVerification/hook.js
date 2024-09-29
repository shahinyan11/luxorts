import { useFormik } from 'formik';

import ROUTES from 'constants/routes';
import checkAuthCompleteness from 'utils/auth/checkAuthCompleteness';
import isPresent from 'utils/isPresent';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';

import { fetchSelf } from 'state/concepts/users/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';
import { verifyUserPhone } from 'state/concepts/session/actions';
import { verifyUserPhoneEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/codeVerification';

function useContainer() {
  const onSubmit = useFormSubmit(verifyUserPhone);

  const { endpoint } = verifyUserPhoneEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      code: '',
      redirectRoute: ROUTES.INDEX.PATH,
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
