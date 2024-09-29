import { shallow } from 'enzyme';

import Bookings from '../component';

describe('Bookings component', () => {
  const component = shallow(<Bookings />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
