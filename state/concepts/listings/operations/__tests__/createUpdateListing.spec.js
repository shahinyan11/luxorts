import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import ROUTES from 'constants/routes';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import assignFormErrors from 'utils/form/assignFormErrors';
import showErrorNotifications from 'utils/showErrorNotifications';
import redirect from 'utils/redirect';
import { createRoute } from 'utils/createRouteHelpers';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { showMessage } from 'state/flash-messages/actions';
import {
  createListingEndpoint,
  updateListingPropertyTypeEndpoint,
} from 'state/concepts/listings/endpoints';
import createListingResponse from 'state/concepts/listings/__mocks__/createListingResponse';
import fetchListingPropertyTypeResponse from 'state/concepts/listings/__mocks__/fetchListingPropertyTypeResponse';

import createUpdateListing from '../createUpdateListing';

jest.mock('utils/redirect');
jest.mock('utils/form/assignFormErrors');
jest.mock('utils/showErrorNotifications');

describe('createUpdateListing operation', () => {
  let dispatch = jest.fn();

  const defaultAction = {
    values: {
      listingPropertyType: {
        propertyTypeId: 'propertyTypeId',
        typeOfPlace: 'typeOfPlace',
      },
      shouldRedirect: true,
      message: 'message',
    },
    form: {},
  };

  const body = {
    listing_property_type: {
      property_type_id: defaultAction.values.listingPropertyType.propertyTypeId,
      type_of_place: defaultAction.values.listingPropertyType.typeOfPlace,
    },
  };

  const beforeFunction =
    (httpClient, action = defaultAction) =>
    () => {
      jest.clearAllMocks();
      dispatch = jest.fn();
      createUpdateListing.process({ httpClient, action }, dispatch, jest.fn());
    };

  it('matches snapshot', () => {
    expect(createUpdateListing).toMatchSnapshot();
  });

  describe('when listingId isn`t present', () => {
    const { endpoint, url } = createListingEndpoint;

    describe('success', () => {
      const httpClient = mockHttpClient({ method: 'post', response: createListingResponse });

      beforeEach(beforeFunction(httpClient));

      it('calls right endpoint with right params', () => {
        expect(httpClient.post).toHaveBeenCalledWith(url, body);
      });

      it('dispatches actions', () => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
        expect(dispatch).toHaveBeenNthCalledWith(
          2,
          dataApiSuccess({
            endpoint,
            response: normalize(createListingResponse.data),
          }),
        );
        expect(dispatch).toHaveBeenNthCalledWith(3, showMessage(defaultAction.values.message));
      });

      it('redirects', () => {
        const redirectRoute = createRoute({
          pathname: ROUTES.ADD_NEW_LISTING.ACCOMMODATION.PATH,
          id: createListingResponse.data.data.id,
        });

        expect(redirect).toHaveBeenCalledWith(redirectRoute);
      });
    });

    it('redirects when redirectRoute is present', async () => {
      const httpClient = mockHttpClient({ method: 'post', response: createListingResponse });

      await createUpdateListing.process(
        {
          httpClient,
          action: mergeDeepRight(defaultAction, {
            values: {
              redirectRoute: 'redirectRoute',
            },
          }),
        },
        dispatch,
        jest.fn(),
      );

      expect(redirect).toHaveBeenCalledWith('redirectRoute');
    });

    it('shouldn`t dispatches showMessage if action.values.message isn`t present', async () => {
      const httpClient = mockHttpClient({ method: 'post', response: createListingResponse });

      dispatch.mockClear();

      await createUpdateListing.process(
        {
          httpClient,
          action: mergeDeepRight(defaultAction, {
            values: {
              message: null,
            },
          }),
        },
        dispatch,
        jest.fn(),
      );

      expect(dispatch).not.toHaveBeenCalledWith(showMessage(defaultAction.values.message));
    });

    describe('failure', () => {
      const error = new Error('test');

      const httpClient = mockHttpClient({
        method: 'post',
        response: error,
        reject: true,
      });

      beforeEach(beforeFunction(httpClient));

      it('dispatches actions', () => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
        expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
      });

      it('sets errors', () => {
        expect(assignFormErrors).toHaveBeenCalledWith(defaultAction.form, error);
        expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
      });
    });
  });

  describe('when listingId is present', () => {
    const action = mergeDeepRight(defaultAction, {
      values: {
        listingId: 'listingId',
      },
    });

    const { endpoint, url } = updateListingPropertyTypeEndpoint(action.values.listingId);

    describe('success', () => {
      const httpClient = mockHttpClient({
        method: 'put',
        response: fetchListingPropertyTypeResponse,
      });

      beforeEach(beforeFunction(httpClient, action));

      it('calls right endpoint with right params', () => {
        expect(httpClient.put).toHaveBeenCalledWith(url, body);
      });

      it('dispatches actions', () => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
        expect(dispatch).toHaveBeenNthCalledWith(
          2,
          dataApiSuccess({
            endpoint,
            response: normalize(fetchListingPropertyTypeResponse.data),
          }),
        );
        expect(dispatch).toHaveBeenNthCalledWith(3, showMessage(defaultAction.values.message));
      });

      it('redirects', () => {
        const redirectRoute = createRoute({
          pathname: ROUTES.ADD_NEW_LISTING.ACCOMMODATION.PATH,
          id: action.values.listingId,
        });

        expect(redirect).toHaveBeenCalledWith(redirectRoute);
      });
    });

    it('redirects when redirectRoute is present', async () => {
      const httpClient = mockHttpClient({
        method: 'put',
        response: fetchListingPropertyTypeResponse,
      });

      await createUpdateListing.process(
        {
          httpClient,
          action: mergeDeepRight(action, {
            values: {
              redirectRoute: 'redirectRoute',
            },
          }),
        },
        dispatch,
        jest.fn(),
      );

      expect(redirect).toHaveBeenCalledWith('redirectRoute');
    });

    it('shouldn`t dispatches showMessage if action.values.message isn`t present', async () => {
      const httpClient = mockHttpClient({
        method: 'put',
        response: fetchListingPropertyTypeResponse,
      });

      dispatch.mockClear();

      await createUpdateListing.process(
        {
          httpClient,
          action: mergeDeepRight(defaultAction, {
            values: {
              message: null,
            },
          }),
        },
        dispatch,
        jest.fn(),
      );

      expect(dispatch).not.toHaveBeenCalledWith(showMessage(defaultAction.values.message));
    });

    it('shouldn`t redirects when shouldRedirect equals false', async () => {
      const httpClient = mockHttpClient({
        method: 'put',
        response: fetchListingPropertyTypeResponse,
      });
      redirect.mockClear();
      await createUpdateListing.process(
        {
          httpClient,
          action: mergeDeepRight(action, {
            values: {
              shouldRedirect: false,
            },
          }),
        },
        dispatch,
        jest.fn(),
      );

      expect(redirect).not.toHaveBeenCalled();
    });

    describe('failure', () => {
      const error = new Error('test');

      const httpClient = mockHttpClient({
        method: 'put',
        response: error,
        reject: true,
      });

      beforeEach(beforeFunction(httpClient, action));

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
});
