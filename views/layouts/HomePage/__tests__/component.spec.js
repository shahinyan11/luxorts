import { shallow } from 'enzyme';

import HomePageLayout from '../component';

describe('HomePageLayout component', () => {
  const component = shallow(<HomePageLayout>Foo</HomePageLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
