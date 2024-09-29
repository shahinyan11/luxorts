import { shallow } from 'enzyme';

import Toolbar from '../component';

const mockedCalendarToolbarData = {
  navigate: jest.fn(() => jest.fn()),
};
jest.mock('hooks/calendar/useCalendarToolbar', () => jest.fn(() => mockedCalendarToolbarData));

describe('Toolbar component', () => {
  const props = {
    label: 'label',
    onNavigate: jest.fn(),
    toggleMonthAvailability: jest.fn(),
    isFullMonthBlocked: false,
    isTimePeriodsCreating: false,
  };

  const component = shallow(<Toolbar {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isFullMonthBlocked equals true', () => {
    component.setProps({
      isFullMonthBlocked: true,
    });

    expect(component).toMatchSnapshot();
  });
});
