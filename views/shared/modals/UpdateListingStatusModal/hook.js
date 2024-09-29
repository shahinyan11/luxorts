import { useDispatch } from 'react-redux';

import {
  SUCCESS_MESSAGE_BY_STATUS,
  SUCCESS_MODAL_BY_STATUS,
} from 'constants/listing/manageListings';

import useImmutableCallback from 'hooks/useImmutableCallback';
import useParametricSelector from 'hooks/useParametricSelector';

import { loadingSelectorCreator } from 'state/data/selectors';
import { updateListingStatus } from 'state/concepts/listings/actions';
import { updateListingStatusEndpoint } from 'state/concepts/listings/endpoints';

function useContainer({ id, status }) {
  const dispatch = useDispatch();
  const { endpoint } = updateListingStatusEndpoint(id);
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * On confirm button click handler
   */
  const onConfirm = useImmutableCallback(() => {
    dispatch(
      updateListingStatus({
        listingId: id,
        status,
        modal: SUCCESS_MODAL_BY_STATUS[status],
        message: SUCCESS_MESSAGE_BY_STATUS[status],
        hideModal: true,
      }),
    );
  });

  return { isLoading, onConfirm };
}

export default useContainer;
