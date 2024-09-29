import { shallow } from 'enzyme';

import DashboardLayout from '../component';

describe('DashboardLayout component', () => {
  const component = shallow(<DashboardLayout>foo</DashboardLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
