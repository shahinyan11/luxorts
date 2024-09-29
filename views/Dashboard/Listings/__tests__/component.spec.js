import { shallow } from 'enzyme';

import {
  LISTING_FILTERS,
  LISTING_PAGINATION,
  LISTING_TABLE_COLUMNS_KEY,
} from 'constants/listing/manageListings';

import useContainer from '../hook';
import Listings from '../component';

const mockedHookData = {
  total: 1,
  isFetching: false,
  tableColumns: [
    { key: LISTING_TABLE_COLUMNS_KEY.LISTING, label: { id: 'label.id' } },
    { key: LISTING_TABLE_COLUMNS_KEY.BEDS, sortKey: 'sortKey', label: { id: 'label.id' } },
  ],
  dataSource: [],
  sort: {},
  pagination: LISTING_PAGINATION,
  settingsVisible: false,
  settings: [],
  filters: LISTING_FILTERS,
  searchQuery: 'searchQuery',
  amenities: [],
  hasAppliedFilters: false,
  onSortClickHandler: jest.fn(() => jest.fn()),
  onPaginationChangeHandler: jest.fn(),
  onSettingsChangeHandler: jest.fn(),
  onSettingsVisibleChangeHandler: jest.fn(),
  onFilter: jest.fn(),
  clearAllFilters: jest.fn(),
  onSearch: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Listings component', () => {
  let component = shallow(<Listings />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isFetching equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isFetching: true,
    });

    component = shallow(<Listings />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when total equals 0', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      total: 0,
    });

    component = shallow(<Listings />);

    expect(component).toMatchSnapshot();
  });
});
