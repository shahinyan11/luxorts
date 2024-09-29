import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import { LISTING_STATUS } from 'constants/listing';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { updateListingStatusEndpoint } from 'state/concepts/listings/endpoints';
import { hideModal, showModal } from 'state/modal/actions';
import response from 'state/concepts/listings/__mocks__/createListingResponse';
import { showMessage } from 'state/flash-messages/actions';
import { fetchListings } from 'state/concepts/listings/actions';

import updateListingStatus from '../updateListingStatus';

jest.mock('utils/showErrorNotifications');

describe('updateListingStatus operation', () => {
  let dispatch;

  const action = {
    listingId: 'listingId',
    status: LISTING_STATUS.DELETED,
    modal: 'modal',
    message: 'message',
  };

  const body = {
    status: action.status,
  };

  const { endpoint, url } = updateListingStatusEndpoint(action.listingId);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    updateListingStatus.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(updateListingStatus).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(5);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(3, showModal(action.modal));

      expect(dispatch).toHaveBeenNthCalledWith(4, showMessage(action.message));

      expect(dispatch).toHaveBeenNthCalledWith(5, fetchListings({ skipLoading: true }));
    });
  });

  it('shouldn`t dispatches showModal when modal isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      modal: null,
    });

    dispatch.mockClear();

    updateListingStatus.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(showModal(action.modal));
  });

  it('shouldn`t dispatches showMessage when message isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      message: null,
    });

    dispatch.mockClear();

    updateListingStatus.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(showMessage(action.message));
  });

  it('shouldn`t dispatches fetchListings when status does not equal LISTING_STATUS.DELETED', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      status: 'status',
    });

    dispatch.mockClear();

    updateListingStatus.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(fetchListings({ skipLoading: true }));
  });

  it('should dispatches hideModal when action.hideModal equals true and action.modal isn`t present', async () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      hideModal: true,
      modal: null,
    });

    dispatch.mockClear();

    await updateListingStatus.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).toHaveBeenCalledWith(hideModal());
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'put',
      reject: true,
      response: error,
    });

    beforeEach(beforeFunction(httpClient));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });

    it('sets errors', () => {
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
