import { renderHook } from '@testing-library/react-hooks';

import { dispatch, store } from '__mocks__/react-redux';

import {
  fetchHomePageData,
  fetchPopularApartments,
  setApartmentsPage,
} from 'state/concepts/publicInfo/actions';

import mockedPopularApartments from 'views/__mocks__/mockedPopularApartments';
import mockedPropertyTypes from 'views/__mocks__/mockedPropertyTypes';
import mockedTrendingLocations from 'views/__mocks__/mockedTrendingLocations';

import useContainer, { getInitialProps } from '../hook';

const selfPage = 1;

jest.mock('state/concepts/publicInfo/selectors', () => ({
  propertyTypesSelector: jest.fn(() => mockedPropertyTypes),
  trendingLocationsSelector: jest.fn(() => mockedTrendingLocations),
  popularApartmentsLastPageSelector: jest.fn(() => 7),
  popularApartmentsSelfPageSelector: jest.fn(() => selfPage),
}));

jest.mock('state/concepts/listings/selectors', () => ({
  listingsSelector: jest.fn(() => mockedPopularApartments),
}));

describe('Home useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('handlePrev method must dispatch setApartmentsPage and fetchPopularApartments actions', () => {
    result.current.handlePrev();

    expect(dispatch).toHaveBeenCalledWith(setApartmentsPage(selfPage - 1));
    expect(dispatch).toHaveBeenCalledWith(fetchPopularApartments());
  });

  it('handleNext method must dispatch setApartmentsPage and fetchPopularApartments actions', () => {
    result.current.handleNext();

    expect(dispatch).toHaveBeenCalledWith(setApartmentsPage(selfPage + 1));
    expect(dispatch).toHaveBeenCalledWith(fetchPopularApartments());
  });

  describe('getInitialProps method', () => {
    const ctx = { store };

    it('dispatches actions', async () => {
      await getInitialProps(ctx);

      expect(dispatch).toHaveBeenCalledWith(fetchHomePageData());
    });
  });
});
