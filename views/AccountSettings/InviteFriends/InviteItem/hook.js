import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { userResendInvite } from 'state/concepts/session/actions';

function useContainer({ id }) {
  const dispatch = useDispatch();

  /**
   * Dispatch userResendInvite action
   */
  const resendHandler = useCallback(() => {
    dispatch(userResendInvite(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    resendHandler,
  };
}

export default useContainer;
