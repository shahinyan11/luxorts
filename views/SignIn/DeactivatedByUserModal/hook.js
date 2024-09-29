import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import ROUTES from 'constants/routes';

import useImmutableCallback from 'hooks/useImmutableCallback';
import useParametricSelector from 'hooks/useParametricSelector';

import { userActivateAccount, userSignOut } from 'state/concepts/session/actions';
import { userAccountActivationEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

function useContainer({ onClose }) {
  const dispatch = useDispatch();

  const { endpoint } = userAccountActivationEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Handle cancel button click
   */
  const onCancelHandler = useCallback(() => {
    dispatch(userSignOut());
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  /**
   * Handle confirm button click
   */
  const onConfirmHandler = useImmutableCallback(() => {
    dispatch(userActivateAccount({ redirectRoute: ROUTES.INDEX.PATH, isModal: true }));
  });

  return {
    onCancelHandler,
    onConfirmHandler,
    isLoading,
  };
}

export default useContainer;
