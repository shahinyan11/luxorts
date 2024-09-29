import { shallow } from 'enzyme';

import GuestLayout from '../component';

describe('GuestLayout component', () => {
  const component = shallow(<GuestLayout>Foo</GuestLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
