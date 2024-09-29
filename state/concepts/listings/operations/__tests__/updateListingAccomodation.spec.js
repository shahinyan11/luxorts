import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import {
  INITIAL_BATHROOM,
  INITIAL_BEDROOM,
  LISTING_DEFAULT_BATHS,
  LISTING_DEFAULT_BEDS,
} from 'constants/listing';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import redirect from 'utils/redirect';
import showErrorNotifications from 'utils/showErrorNotifications';
import makeAccommodationItem from 'utils/listing/makeAccommodationItem';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { updateListingAccomodationEndpoint } from 'state/concepts/listings/endpoints';
import response from 'state/concepts/listings/__mocks__/fetchListingAccomodationResponse';

import updateListingAccomodation, { kindIsPresent } from '../updateListingAccomodation';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('updateListingAccomodation operation', () => {
  let dispatch;

  const action = {
    values: {
      guestsNumber: 1,
      bedsAmount: 1,
      bedroomsForDeleting: [],
      bathroomsForDeleting: [],
      bedrooms: [INITIAL_BEDROOM],
      bathrooms: [INITIAL_BATHROOM],
      listingId: 'listingId',
      redirectRoute: 'redirectRoute',
    },
    form: {},
  };

  const body = {
    guests_number: action.values.guestsNumber,
    beds_amount: action.values.bedsAmount,
    listing_bedrooms: [
      {
        default_beds: LISTING_DEFAULT_BEDS.map(makeAccommodationItem),
        custom_beds: [],
      },
    ],
    listing_bathrooms: [
      {
        default_baths: LISTING_DEFAULT_BATHS.map(makeAccommodationItem),
        custom_baths: [],
      },
    ],
  };

  const { endpoint, url } = updateListingAccomodationEndpoint(action.values.listingId);

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    updateListingAccomodation.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(updateListingAccomodation).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  it('shouldn`t call redirect when redirectRoute isn`t present', () => {
    const httpClient = mockHttpClient({ method: 'put', response });
    const newAction = mergeDeepRight(action, {
      values: {
        redirectRoute: null,
      },
    });

    redirect.mockClear();

    updateListingAccomodation.process({ httpClient, action: newAction }, dispatch, jest.fn());

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

describe('kindIsPresent helper', () => {
  it('should returns true when kind property is present', () => {
    expect(kindIsPresent({ kind: 'kind' })).toBe(true);
  });

  it('should returns false when kind property isn`t present', () => {
    expect(kindIsPresent({})).toBe(false);
  });
});
