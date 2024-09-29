import { shallow } from 'enzyme';

import LoginAndSecurityLayout from '../component';

describe('LoginAndSecurityLayout component', () => {
  const component = shallow(<LoginAndSecurityLayout>Foo</LoginAndSecurityLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
