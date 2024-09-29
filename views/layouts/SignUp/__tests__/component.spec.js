import { shallow } from 'enzyme';

import SignUpLayout from '../component';

describe('SignUpLayout component', () => {
  const component = shallow(<SignUpLayout>Foo</SignUpLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
