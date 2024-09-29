import { useDispatch } from 'react-redux';

import useImmutableCallback from 'hooks/useImmutableCallback';

import { hideModal } from 'state/modal/actions';

const useHideModal = () => {
  const dispatch = useDispatch();

  return useImmutableCallback(() => {
    dispatch(hideModal());
  });
};

export default useHideModal;
