import { renderHook } from '@testing-library/react-hooks';

import checkUserVerification from 'utils/auth/checkUserVerification';

import useParametricSelector from 'hooks/useParametricSelector';

import { fetchListing, fetchListingPhotos } from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import { store } from '__mocks__/react-redux';
import mockedListing from 'views/__mocks__/mockedListing';
import mockedListingPhotos from 'views/__mocks__/mockedListingPhotos';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
  listingPhotosSelector: jest.fn(() => mockedListingPhotos),
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
    listingPhotos: [],
    listingId: mockedListingId,
    photosForDeleting: [],
  },
  setFieldValue: jest.fn(),
  resetForm: jest.fn(),
};
jest.mock('formik', () => ({
  useFormik: jest.fn(() => mockedFormik),
}));

describe('Photos useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onRemovePhotoCallback method', () => {
    it('should saves deleted item when file isn`t present', () => {
      result.current.onRemovePhotoCallback({ id: 'id' });

      expect(mockedFormik.setFieldValue).toHaveBeenCalledWith('photosForDeleting', [
        ...mockedFormik.values.photosForDeleting,
        { id: 'id', delete: true },
      ]);
    });

    it('shouldn`t saves deleted item when file is present', () => {
      mockedFormik.setFieldValue.mockClear();

      result.current.onRemovePhotoCallback({ id: 'id', file: 'file' });

      expect(mockedFormik.setFieldValue).not.toHaveBeenCalled();
    });
  });

  describe('handleUpdateFormikListingPhotos method', () => {
    it('should calls formik.resetForm with listingPhotos when isLoading equals false', () => {
      result.current.handleUpdateFormikListingPhotos();

      const expected = {
        values: {
          ...mockedFormik.values,
          listingPhotos: mockedListingPhotos,
        },
      };

      expect(mockedFormik.resetForm).toHaveBeenCalledWith(expected);
    });

    it('shouldn`t calls formik.resetForm with listingPhotos when isLoading equals true', () => {
      useParametricSelector.mockReturnValue(true);

      ({ result } = renderHook(useContainer));

      mockedFormik.resetForm.mockClear();

      result.current.handleUpdateFormikListingPhotos();

      expect(mockedFormik.resetForm).not.toHaveBeenCalled();
    });
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

      expect(store.dispatch).toHaveBeenCalledTimes(3);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('listingPhoto'));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListing(mockedListingId));
      expect(store.dispatch).toHaveBeenNthCalledWith(3, fetchListingPhotos(mockedListingId));
    });

    it('should dispatches only general actions when user is verified and listingId isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: {},
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('listingPhoto'));
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
