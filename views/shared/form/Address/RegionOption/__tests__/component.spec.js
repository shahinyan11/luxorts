import { shallow } from 'enzyme';

import RegionOption from '../component';

describe('RegionOption component', () => {
  const component = shallow(<RegionOption name="name" />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
