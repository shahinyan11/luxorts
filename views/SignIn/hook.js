import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import { PASSWORD_UPDATE_SUCCESS_STATUS } from 'constants/statuses';
import ROUTES from 'constants/routes';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';
import checkAuthCompleteness from 'utils/auth/checkAuthCompleteness';

import { fetchSelf } from 'state/concepts/users/actions';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';
import { showMessage } from 'state/flash-messages/actions';
import { userSignIn } from 'state/concepts/session/actions';
import { signInUserEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/signIn';
import { MESSAGE_DURATION } from 'state/flash-messages/messagesTypes';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(userSignIn);

  const { endpoint } = signInUserEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      redirectRoute: router.query.redirect || ROUTES.INDEX.PATH,
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
  const passwordUpdate = ctx.query?.password_update;
  const isServer = Boolean(ctx.req);
  const isUserLoggedIn = isUserLoggedInSelector(ctx.store.getState());

  if (passwordUpdate === PASSWORD_UPDATE_SUCCESS_STATUS) {
    ctx.store.dispatch(
      showMessage({
        description: { id: 'shared.yourPasswordHasBeenUpdated' },
        duration: MESSAGE_DURATION.STATIC,
      }),
    );
  }

  if (isUserLoggedIn) {
    ctx.store.dispatch(fetchSelf());
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkAuthCompleteness(ctx);
    });
  }
};

export default useContainer;
