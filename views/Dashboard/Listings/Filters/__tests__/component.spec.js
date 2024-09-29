import { shallow } from 'enzyme';

import { LISTING_FILTERS } from 'constants/listing/manageListings';

import Filters from '../component';

describe('Filters component', () => {
  const props = {
    amenities: [],
    filters: LISTING_FILTERS,
    onFilter: jest.fn(),
    onSearch: jest.fn(),
    searchQuery: 'searchQuery',
  };
  const component = shallow(<Filters {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
