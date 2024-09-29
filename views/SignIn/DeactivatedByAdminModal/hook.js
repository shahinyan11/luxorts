import { useCallback } from 'react';
import { useRouter } from 'next/router';

import ROUTES from 'constants/routes';

function useContainer({ onClose }) {
  const router = useRouter();

  /**
   * Handle confirm button click
   */
  const onConfirmHandler = useCallback(() => {
    router.push(ROUTES.SUPPORT.PATH);
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return {
    onConfirmHandler,
  };
}

export default useContainer;
