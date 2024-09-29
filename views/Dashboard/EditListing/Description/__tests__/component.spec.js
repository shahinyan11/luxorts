import { shallow } from 'enzyme';

import Description from '../component';

describe('Description component', () => {
  const component = shallow(<Description />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
