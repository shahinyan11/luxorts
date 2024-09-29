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
  };

  const component = shallow(<Toolbar {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
