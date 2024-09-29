import { useDispatch, useSelector } from 'react-redux';

import useImmutableCallback from 'hooks/useImmutableCallback';

import { userSignOut } from 'state/concepts/session/actions';
import { currentUserSelector } from 'state/concepts/session/selectors';

function useContainer() {
  const dispatch = useDispatch();

  const currentUser = useSelector(currentUserSelector);

  /**
   * On logout button click handler
   */
  const onLogOutHandler = useImmutableCallback(() => {
    dispatch(userSignOut());
  });

  return {
    onLogOutHandler,
    currentUser,
  };
}

export default useContainer;
