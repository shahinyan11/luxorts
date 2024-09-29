import { useDispatch } from 'react-redux';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';

import { userRemoveAvatar } from 'state/concepts/session/actions';
import { userRemoveAvatarEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

function useContainer() {
  const dispatch = useDispatch();

  // selectors
  const { endpoint } = userRemoveAvatarEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Remove image
   */
  const handleRemove = useImmutableCallback(() => {
    dispatch(userRemoveAvatar());
  });

  return {
    isLoading,
    handleRemove,
  };
}

export default useContainer;
