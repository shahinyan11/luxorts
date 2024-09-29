import { shallow } from 'enzyme';

import Availability from '../component';

const mockedHookData = {
  onNext: jest.fn(),
  onBack: jest.fn(),
  onNavigate: jest.fn(),
  listingBlockedTimePeriods: 'listingBlockedTimePeriods',
  isTimePeriodsCreating: false,
  isListingUpdating: false,
  isFullMonthBlocked: false,
  toggleMonthAvailability: jest.fn(),
  onSelectSlot: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Availability component', () => {
  const component = shallow(<Availability />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
