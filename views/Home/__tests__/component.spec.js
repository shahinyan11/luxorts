import { shallow } from 'enzyme';

import mockedPopularApartments from 'views/__mocks__/mockedPopularApartments';
import mockedTrendingLocations from 'views/__mocks__/mockedTrendingLocations';
import mockedPropertyTypes from 'views/__mocks__/mockedPropertyTypes';

import Home from '../component';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  propertyTypesSelector: jest.fn(() => mockedPropertyTypes),
  trendingLocationsSelector: jest.fn(() => mockedTrendingLocations),
  popularApartmentsLastPageSelector: jest.fn(() => 7),
  popularApartmentsSelfPageSelector: jest.fn(() => 1),
}));

jest.mock('state/concepts/listings/selectors', () => ({
  listingsSelector: jest.fn(() => mockedPopularApartments),
}));

describe('Home component', () => {
  const component = shallow(<Home />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
