import { shallow } from 'enzyme';
import mockedListing from 'views/__mocks__/mockedListing';
import mockedListings from 'views/__mocks__/mockedListings';

import useContainer from '../hook';
import EditListingLayout from '../component';

const mockedHookData = {
  listingId: 'listingId',
  listing: mockedListing,
  listings: mockedListings,
  activeKey: 'activeKey',
  total: 1,
  isListingPresent: true,
  selectedListingTitle: 'selectedListingTitle',
  selectedListingDescription: 'selectedListingDescription',
  onTabClick: jest.fn(),
  onDropdownMenuItemClick: jest.fn(() => jest.fn()),
  onScrollNext: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('EditListingLayout component', () => {
  let component = shallow(<EditListingLayout>Foo</EditListingLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isListingPresent equals false', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isListingPresent: false,
    });

    component = shallow(<EditListingLayout>Foo</EditListingLayout>);

    expect(component).toMatchSnapshot();
  });
});
