import { shallow } from 'enzyme';

import Help from '../component';

describe('Help component', () => {
  const component = shallow(<Help />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
