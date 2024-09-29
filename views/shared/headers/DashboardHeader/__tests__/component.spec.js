import { shallow } from 'enzyme';

import DashboardHeader from '../component';

const mockedHookData = {
  menuItems: { key: 'key', label: 'label' },
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('DashboardHeader component', () => {
  const props = { selectedKey: 'selectedKey' };
  const component = shallow(<DashboardHeader {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
