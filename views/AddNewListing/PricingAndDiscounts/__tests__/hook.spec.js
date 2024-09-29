import { renderHook } from '@testing-library/react-hooks';
import { useFormik } from 'formik';

import checkUserVerification from 'utils/auth/checkUserVerification';

import { fetchListing, fetchListingPricing } from 'state/concepts/listings/actions';
import { store } from '__mocks__/react-redux';
import mockedListing from 'views/__mocks__/mockedListing';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
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
    pricePerDay: null,
    weeklyDiscount: null,
    mounthlyDiscount: null,
    extraCharges: null,
    listingId: mockedListingId,
  },
};
jest.mock('formik', () => ({
  useFormik: jest.fn(() => mockedFormik),
}));

describe('PricingAndDiscounts useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('matches snapshot for weeklyDiscountTooltip when weeklyDiscount and pricePerDay are present', () => {
    useFormik.mockReturnValueOnce({
      ...mockedFormik,
      values: {
        ...mockedFormik.values,
        weeklyDiscount: 10,
        pricePerDay: 64,
      },
    });

    ({ result } = renderHook(useContainer));

    expect(result.current.weeklyDiscountTooltip).toMatchSnapshot();
  });

  it('matches snapshot for monthlyDiscountTooltip when mounthlyDiscount and pricePerDay are present', () => {
    useFormik.mockReturnValueOnce({
      ...mockedFormik,
      values: {
        ...mockedFormik.values,
        mounthlyDiscount: 20,
        pricePerDay: 64,
      },
    });

    ({ result } = renderHook(useContainer));

    expect(result.current.monthlyDiscountTooltip).toMatchSnapshot();
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

      expect(store.dispatch).toHaveBeenCalledTimes(2);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, fetchListing(mockedListingId));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListingPricing(mockedListingId));
    });

    it('shouldn`t dispatches any actions when user is verified and listingId isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: {},
      });

      expect(store.dispatch).not.toHaveBeenCalled();
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
