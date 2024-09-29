import { useDispatch } from 'react-redux';

import { showModal } from 'state/modal/actions';
import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer() {
  const dispatch = useDispatch();

  /**
   * Show Deactivate account Modal
   */
  const handleDeactivateClick = useImmutableCallback(() => {
    dispatch(
      showModal({
        modalType: 'DEACTIVATE_ACCOUNT_MODAL',
      }),
    );
  });

  return {
    handleDeactivateClick,
  };
}

export default useContainer;
