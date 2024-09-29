import { shallow } from 'enzyme';

import Accommodation from '../component';

describe('Accommodation component', () => {
  const component = shallow(<Accommodation />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
