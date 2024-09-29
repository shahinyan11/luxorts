import normalize from 'json-api-normalizer';
import { compose, flatten, map, mergeDeepRight, values } from 'ramda';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';
import prepareDataForRequest from 'utils/listing/prepareDataForRequest';

import { dataApiRequest, dataApiSuccess, dataApiFailure, dataDelete } from 'state/data/actions';
import { updateListingCapabilitiesEndpoint } from 'state/concepts/listings/endpoints';
import response from 'state/concepts/listings/__mocks__/fetchListingAccomodationResponse';
import { showMessage } from 'state/flash-messages/actions';
import mockedCapabilities from 'views/__mocks__/mockedCapabilities';

import updateListingCapabilities from '../updateListingCapabilities';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('updateListingCapabilities operation', () => {
  let dispatch;

  const action = {
    values: {
      capabilities: mockedCapabilities,
      additional: {
        name: 'name',
        description: 'description',
      },
      listingId: 'listingId',
      redirectRoute: 'redirectRoute',
      message: 'message',
    },
    form: {},
  };

  const flattenCapabilities = compose(flatten, map(values), values)(action.values.capabilities);
  const { items, ids, relatedIds } = prepareDataForRequest(flattenCapabilities);

  const body = {
    capabilities: [...items, action.values.additional],
  };

  const { endpoint, url } = updateListingCapabilitiesEndpoint(action.values.listingId);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    updateListingCapabilities.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(updateListingCapabilities).toMatchSnapshot();
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

      expect(dispatch).toHaveBeenNthCalledWith(3, dataDelete({ kind: 'capability', ids }));

      expect(dispatch).toHaveBeenNthCalledWith(
        4,
        dataDelete({ kind: 'listingCapability', ids: relatedIds }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(5, showMessage(action.values.message));
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('shouldn`t dispatches showMessage when message isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        message: null,
      },
    });

    dispatch.mockClear();

    updateListingCapabilities.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(dispatch).not.toHaveBeenCalledWith(showMessage(action.values.message));
  });

  it('shouldn`t calls redirect when redirectRoute isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        redirectRoute: null,
      },
    });

    redirect.mockClear();

    updateListingCapabilities.process({ httpClient, action: newAction }, dispatch, jest.fn());

    expect(redirect).not.toHaveBeenCalled();
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
      expect(assignFormErrors).toHaveBeenCalledWith(action.form, error);
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
