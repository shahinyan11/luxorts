import { renderHook } from '@testing-library/react-hooks';
import { useFormik } from 'formik';
import { mergeDeepRight } from 'ramda';

import { ANTD_CLASSNAME, DIRECTION } from 'constants';
import { ACCOMMODATION_VALIDATION, INITIAL_BATHROOM, INITIAL_BEDROOM } from 'constants/listing';

import checkUserVerification from 'utils/auth/checkUserVerification';
import disableHtmlElementsByClassName from 'utils/disableHtmlElementsByClassName';

import { fetchListing, fetchListingAccomodation } from 'state/concepts/listings/actions';
import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { dispatch, store } from '__mocks__/react-redux';
import { mockedV4Value } from '__mocks__/uuid';
import mockedListing from 'views/__mocks__/mockedListing';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));
jest.mock('utils/disableHtmlElementsByClassName');
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
    guestsNumber: ACCOMMODATION_VALIDATION.BASE.MIN,
    listingBedrooms: ACCOMMODATION_VALIDATION.BASE.MIN,
    bedsAmount: ACCOMMODATION_VALIDATION.BASE.MIN,
    listingBathrooms: ACCOMMODATION_VALIDATION.BASE.MIN,
    bedrooms: [INITIAL_BEDROOM],
    bathrooms: [INITIAL_BATHROOM],
    bedroomsForDeleting: [],
    bathroomsForDeleting: [],
  },
  setFormikState: jest.fn(),
  setFieldValue: jest.fn(),
};
jest.mock('formik', () => ({
  useFormik: jest.fn(() => mockedFormik),
}));

describe('Accommodation useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('should returns totalBedsAmount', () => {
    it('when amount of all beds equals 0', () => {
      expect(result.current.totalBedsAmount).toBe(0);
    });

    it('when amount of all beds equals 1', () => {
      useFormik.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            bedrooms: [
              {
                defaultBeds: [
                  {
                    amount: 1,
                  },
                ],
                customBeds: [],
              },
            ],
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      expect(result.current.totalBedsAmount).toBe(1);
    });
  });

  describe('onListingBedroomsChange method', () => {
    it('shouldn`t sets formik state when amount isn`t present', () => {
      result.current.onListingBedroomsChange();

      expect(mockedFormik.setFormikState).not.toHaveBeenCalled();
    });

    it('should increases amount of bedrooms in formik state', () => {
      const { bedrooms } = mockedFormik.values;

      const expected = mergeDeepRight(mockedFormik, {
        values: {
          bedrooms: [...bedrooms, INITIAL_BEDROOM],
        },
      });

      result.current.onListingBedroomsChange(2);

      expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
    });

    it('should decreases amount of bedrooms and save deleted item id in formik state', () => {
      useFormik.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            bedrooms: [{ id: 'bedroom-1', ...INITIAL_BEDROOM }],
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      const expected = mergeDeepRight(mockedFormik, {
        values: {
          bedrooms: [],
          bedroomsForDeleting: [{ id: 'bedroom-1', delete: true }],
        },
      });

      result.current.onListingBedroomsChange(0);

      expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
    });
  });

  describe('onListingBathroomsChange method', () => {
    it('shouldn`t sets formik state when amount isn`t present', () => {
      result.current.onListingBathroomsChange();

      expect(mockedFormik.setFormikState).not.toHaveBeenCalled();
    });

    it('should increases amount of bathrooms in formik state', () => {
      const { bathrooms } = mockedFormik.values;

      const expected = mergeDeepRight(mockedFormik, {
        values: {
          bathrooms: [...bathrooms, INITIAL_BATHROOM],
        },
      });

      result.current.onListingBathroomsChange(2);

      expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
    });

    it('should decreases amount of bathrooms and save deleted item id in formik state', () => {
      useFormik.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            bathrooms: [{ id: 'bathroom-1', ...INITIAL_BATHROOM }],
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      const expected = mergeDeepRight(mockedFormik, {
        values: {
          bathrooms: [],
          bathroomsForDeleting: [{ id: 'bathroom-1', delete: true }],
        },
      });

      result.current.onListingBathroomsChange(0);

      expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
    });
  });

  it('handleAddCustomBedCreator method should calls setFieldValue with increased amount of custom beds', () => {
    result.current.handleAddCustomBedCreator(0)();

    const expected = [
      {
        uuid: mockedV4Value,
        kind: '',
        amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
      },
    ];

    expect(mockedFormik.setFieldValue).toHaveBeenCalledWith('bedrooms[0].customBeds', expected);
  });

  it('handleAddCustomBathCreator method should calls setFieldValue with increased amount of custom baths', () => {
    result.current.handleAddCustomBathCreator(0)();

    const expected = [
      {
        uuid: mockedV4Value,
        kind: '',
        amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN,
      },
    ];

    expect(mockedFormik.setFieldValue).toHaveBeenCalledWith('bathrooms[0].customBaths', expected);
  });

  it('handleRemoveCustomBedCreator method decreases amount of custom beds and save deleted item id in formik state', () => {
    useFormik.mockReturnValueOnce(
      mergeDeepRight(mockedFormik, {
        values: {
          bedrooms: [{ ...INITIAL_BEDROOM, customBeds: [{ id: 'custom-bed-1' }] }],
        },
      }),
    );

    ({ result } = renderHook(useContainer));

    const expected = mergeDeepRight(mockedFormik, {
      values: {
        bedrooms: [
          {
            ...INITIAL_BEDROOM,
            customBeds: [],
            bedsForDeleting: [{ id: 'custom-bed-1', delete: true }],
          },
        ],
      },
    });

    result.current.handleRemoveCustomBedCreator({
      bedroomIdx: 0,
      index: 0,
      deletedItem: { id: 'custom-bed-1' },
    })();

    expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
  });

  it('handleRemoveCustomBathCreator method decreases amount of custom baths and save deleted item id in formik state', () => {
    useFormik.mockReturnValueOnce(
      mergeDeepRight(mockedFormik, {
        values: {
          bathrooms: [{ ...INITIAL_BATHROOM, customBaths: [{ id: 'custom-bath-1' }] }],
        },
      }),
    );

    ({ result } = renderHook(useContainer));

    const expected = mergeDeepRight(mockedFormik, {
      values: {
        bathrooms: [
          {
            ...INITIAL_BATHROOM,
            customBaths: [],
            bathsForDeleting: [{ id: 'custom-bath-1', delete: true }],
          },
        ],
      },
    });

    result.current.handleRemoveCustomBathCreator({
      bathroomIdx: 0,
      index: 0,
      deletedItem: { id: 'custom-bath-1' },
    })();

    expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
  });

  describe('onBedAmountChangeHandlerCreator method', () => {
    it('shouldn`t calls anything when type equals `down`', () => {
      result.current.onBedAmountChangeHandlerCreator('fieldName')(null, { type: DIRECTION.DOWN });

      expect(dispatch).not.toHaveBeenCalled();
      expect(mockedFormik.setFieldValue).not.toHaveBeenCalled();
    });

    it('shouldn`t calls anything when type doesn`t equals `down` and totalBedsAmount less than current beds amount', () => {
      result.current.onBedAmountChangeHandlerCreator('fieldName')(null, { type: null });

      expect(dispatch).not.toHaveBeenCalled();
      expect(mockedFormik.setFieldValue).not.toHaveBeenCalled();
    });

    it('should dispatches `showMessage` and calls `setFieldValue`', () => {
      useFormik.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            bedrooms: [
              {
                defaultBeds: [
                  {
                    amount: 1,
                  },
                ],
                customBeds: [],
              },
            ],
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      const value = 2;
      result.current.onBedAmountChangeHandlerCreator('fieldName')(2, { type: null });

      expect(dispatch).toHaveBeenCalledWith(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'validations.numberOfBedsDoesNotMatch' },
        }),
      );

      expect(mockedFormik.setFieldValue).toHaveBeenCalledWith('fieldName', value - 1);
    });
  });

  it('onMountHandler method should calls `disableHtmlElementsByClassName`', () => {
    result.current.onMountHandler();

    expect(disableHtmlElementsByClassName).toHaveBeenCalledWith(ANTD_CLASSNAME.INPUT_NUMBER);
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
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListingAccomodation(mockedListingId));
    });

    it('shouldn`t dispatches any action when user is verified and listingId isn`t present', async () => {
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

  it('makeBedroomHelper method should returns modified object with bedsForDeleting empty array', () => {
    expect(result.current.makeBedroomHelper({ id: 'id' })).toEqual({
      id: 'id',
      bedsForDeleting: [],
    });
  });

  it('makeBathroomHelper method should returns modified object with bathsForDeleting empty array', () => {
    expect(result.current.makeBathroomHelper({ id: 'id' })).toEqual({
      id: 'id',
      bathsForDeleting: [],
    });
  });
});
