import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';
import { NOT_APPROVED } from 'constants';

import { createRoute } from 'utils/createRouteHelpers';
import checkUserVerification from 'utils/auth/checkUserVerification';

import {
  fetchListing,
  fetchListingBaseServices,
  fetchListingServices,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import { store } from '__mocks__/react-redux';
import mockedListing from 'views/__mocks__/mockedListing';
import mockedServices from 'views/__mocks__/mockedServices';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
  listingServicesSelector: jest.fn(() => mockedServices),
}));
jest.mock('utils/listing/checkListingCompleteness');

const mockedListingId = 'listingId';
const mockedRouter = {
  query: { listingId: mockedListingId },
};
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

const mockedFormik = {
  values: {
    listingServices: mockedServices,
    listingId: mockedListingId,
    additional: {
      name: '',
      description: '',
      paid: false,
    },
  },
  setValues: jest.fn(),
  setFieldValue: jest.fn(),
  handleSubmit: jest.fn(),
};
jest.mock('formik', () => ({
  useFormik: jest.fn(() => mockedFormik),
}));

describe('Services useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('handleSubmit method should sets redirectRoute before submit', async () => {
    await result.current.handleSubmit();

    expect(mockedFormik.setFieldValue).toHaveBeenCalledWith(
      'redirectRoute',
      createRoute({
        pathname: ROUTES.ADD_NEW_LISTING.PHOTOS.PATH,
        id: mockedListingId,
      }),
    );
    expect(mockedFormik.handleSubmit).toHaveBeenCalled();
  });

  it('handleAddNotApprovedService method should resets redirectRoute and sets message before submit', async () => {
    await result.current.handleAddNotApprovedService();

    expect(mockedFormik.setValues).toHaveBeenCalledWith({
      ...mockedFormik.values,
      redirectRoute: null,
      message: {
        description: {
          id: 'addNewListing.services.additionalService.success',
        },
      },
    });
    expect(mockedFormik.handleSubmit).toHaveBeenCalled();
  });

  it('handleRemoveNotApprovedServiceCreator should calls formik.setFieldValue', () => {
    result.current.handleRemoveNotApprovedServiceCreator('id')();

    expect(mockedFormik.setFieldValue).toHaveBeenCalledWith(
      `listingServices.${NOT_APPROVED}.id.checked`,
      false,
    );
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        listingId: mockedListingId,
      },
      req: {},
    };

    it('should dispatches all actions when user is verified and listingId is present', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledTimes(5);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('service'));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('listingService'));
      expect(store.dispatch).toHaveBeenNthCalledWith(3, fetchListingBaseServices());
      expect(store.dispatch).toHaveBeenNthCalledWith(4, fetchListing(mockedListingId));
      expect(store.dispatch).toHaveBeenNthCalledWith(5, fetchListingServices(mockedListingId));
    });

    it('should dispatches only general actions when user is verified and listingId isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: {},
      });

      expect(store.dispatch).toHaveBeenCalledTimes(3);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('service'));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, dataDeleteEntity('listingService'));
      expect(store.dispatch).toHaveBeenNthCalledWith(3, fetchListingBaseServices());
    });

    it('shouldn`t dispatches any actions when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('should calls whenComplete callback when is server', async () => {
      await getInitialProps(ctx);

      expect(store.logicMiddleware.whenComplete).toHaveBeenCalled();
    });

    it('shouldn`t calls whenComplete callback when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.logicMiddleware.whenComplete).not.toHaveBeenCalled();
    });
  });
});
