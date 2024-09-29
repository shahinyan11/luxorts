import { shallow } from 'enzyme';

import HouseRules from '../component';

describe('HouseRules component', () => {
  const component = shallow(<HouseRules />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
