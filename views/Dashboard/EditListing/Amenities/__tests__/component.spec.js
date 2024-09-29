import { shallow } from 'enzyme';

import Amenities from '../component';

describe('Amenities component', () => {
  const component = shallow(<Amenities />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
