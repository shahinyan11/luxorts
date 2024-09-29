import { renderHook } from '@testing-library/react-hooks';

import mockedBasePropertyTypes from 'views/__mocks__/mockedBasePropertyTypes';
import mockedListing from 'views/__mocks__/mockedListing';

import useListingPropertyType from '../useListingPropertyType';

jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingsBasePropertyTypesSelector: jest.fn(() => mockedBasePropertyTypes),
  listingSelector: jest.fn(() => mockedListing),
}));
const mockedFormik = {
  values: {
    listingPropertyType: {
      propertyTypeId: mockedListing.listingPropertyType.propertyType.id,
      typeOfPlace: mockedListing.listingPropertyType.typeOfPlace,
    },
  },
};
jest.mock('formik', () => ({
  useFormik: jest.fn(() => mockedFormik),
}));

describe('useListingPropertyType hook', () => {
  const props = { shouldRedirect: true, message: { id: 'message.id' } };
  const { result } = renderHook(() => useListingPropertyType(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
