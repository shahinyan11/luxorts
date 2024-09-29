import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import moment from 'moment';

import { DATE_FORMAT_WITH_TIME, RECOVER } from 'constants';

import checkUserVerification from 'utils/auth/checkUserVerification';

import useImmutableCallback from 'hooks/useImmutableCallback';
import { userSendForgotPasswordEmail } from 'state/concepts/session/actions';
import { currentUserEmailSelector } from 'state/concepts/session/selectors';
import { passwordUpdatedDateSelector } from 'state/concepts/users/selectors';
import { hideModal, showModal } from 'state/modal/actions';
import { fetchSelf } from 'state/concepts/users/actions';

function useContainer() {
  const email = useSelector(currentUserEmailSelector);
  const lastUpdatedDate = useSelector(passwordUpdatedDateSelector);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [updateMode, setUpdateMode] = useState(false);

  /**
   * Toggle update mode
   */
  const toggleUpdateMode = useCallback(() => {
    setUpdateMode(!updateMode);
  }, [updateMode]);

  /**
   * Show Recover Password Modal
   */
  const handleRecoverClick = useImmutableCallback(() => {
    dispatch(userSendForgotPasswordEmail({ email }, null));
    dispatch(
      showModal({
        modalType: 'RECOVER_PASSWORD_MODAL',
      }),
    );
  });

  return {
    updateMode,
    recoverMode: query?.action === RECOVER,
    toggleUpdateMode,
    handleRecoverClick,
    lastUpdatedDate: moment(new Date(lastUpdatedDate)).format(DATE_FORMAT_WITH_TIME),
  };
}

export const getInitialProps = async (ctx) => {
  const action = ctx.query?.action;
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  if (action === RECOVER) {
    ctx.store.dispatch(hideModal());
  }

  ctx.store.dispatch(fetchSelf());
};

export default useContainer;
