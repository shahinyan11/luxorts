import { shallow } from 'enzyme';

import SignInLayout from '../component';

describe('SignInLayout component', () => {
  const component = shallow(<SignInLayout>Foo</SignInLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
