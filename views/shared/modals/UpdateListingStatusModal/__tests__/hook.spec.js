import { renderHook } from '@testing-library/react-hooks';

import { LISTING_STATUS } from 'constants/listing';
import {
  SUCCESS_MESSAGE_BY_STATUS,
  SUCCESS_MODAL_BY_STATUS,
} from 'constants/listing/manageListings';

import { dispatch } from '__mocks__/react-redux';
import { updateListingStatus } from 'state/concepts/listings/actions';

import useContainer from '../hook';

jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));

describe('UpdateListingStatusModal useContainer hook', () => {
  const props = { id: 'id', status: LISTING_STATUS.PUBLISHED };
  const { result } = renderHook(() => useContainer(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onConfirm method should dispatches updateListingStatus', () => {
    result.current.onConfirm();

    expect(dispatch).toHaveBeenCalledWith(
      updateListingStatus({
        listingId: props.id,
        status: props.status,
        modal: SUCCESS_MODAL_BY_STATUS[props.status],
        message: SUCCESS_MESSAGE_BY_STATUS[props.status],
        hideModal: true,
      }),
    );
  });
});
