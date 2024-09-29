import { shallow } from 'enzyme';

import Calendar from '../component';

describe('Calendar component', () => {
  const component = shallow(<Calendar />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
