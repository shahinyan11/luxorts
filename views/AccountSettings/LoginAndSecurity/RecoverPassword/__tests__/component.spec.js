import { shallow } from 'enzyme';

import RecoverPassword from '../component';

describe('RecoverPassword component', () => {
  const component = shallow(<RecoverPassword />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
