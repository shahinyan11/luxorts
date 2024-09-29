import { shallow } from 'enzyme';

import LandingPagesLayout from '../component';

describe('LandingPagesLayout component', () => {
  const component = shallow(<LandingPagesLayout>Foo</LandingPagesLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
