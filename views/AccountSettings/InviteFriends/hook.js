import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'ramda';

import validationSchema from 'lib/yupLocalised/scheme/inviteFriends';

import checkUserVerification from 'utils/auth/checkUserVerification';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import { userInviteFriendsEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import {
  fetchUserInvitation,
  setInvitationsPage,
  userInviteFriends,
} from 'state/concepts/session/actions';
import {
  paginationSelector,
  userInvitationCountSelector,
  userInvitationSelector,
} from 'state/concepts/session/selectors';

function useContainer() {
  const dispatch = useDispatch();
  const onSubmit = useFormSubmit(userInviteFriends, true);
  const { endpoint } = userInviteFriendsEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);
  const userInvitation = useSelector(userInvitationSelector);
  const userInvitationCount = useSelector(userInvitationCountSelector);
  const pagination = useSelector(paginationSelector);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userInvitations: [],
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Handle change page
   */
  const onPageChange = (page) => {
    dispatch(setInvitationsPage(page));
    dispatch(fetchUserInvitation());
  };

  return {
    formik,
    isLoading,
    isDisabled: isEmpty(formik.values.userInvitations),
    userInvitation,
    pagination,
    onPageChange,
    userInvitationCount,
  };
}

export const getInitialProps = async (ctx) => {
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  ctx.store.dispatch(fetchUserInvitation());
};

export default useContainer;
