import { shallow } from 'enzyme';

import mockedListingCustomPrice from 'views/__mocks__/mockedListingCustomPrice';

import useContainer from '../hook';
import Availability from '../component';

const mockedHookData = {
  showSkeleton: false,
  isLoading: false,
  events: [{ id: 'event-1' }],
  pricePerDay: 99,
  customPrice: mockedListingCustomPrice,
  onNavigate: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Availability component', () => {
  let component = shallow(<Availability />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showSkeleton equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      showSkeleton: true,
    });

    component = shallow(<Availability />);

    expect(component).toMatchSnapshot();
  });
});
