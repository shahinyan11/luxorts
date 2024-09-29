import { shallow } from 'enzyme';

import Capabilities from '../component';

describe('Capabilities component', () => {
  const component = shallow(<Capabilities />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
