import { shallow } from 'enzyme';

import ReservationPreferences from '../component';

describe('ReservationPreferences component', () => {
  const component = shallow(<ReservationPreferences />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
