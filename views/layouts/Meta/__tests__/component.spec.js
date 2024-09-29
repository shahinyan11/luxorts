import { shallow } from 'enzyme';

import MetaComponent from '../component';

describe('Meta component', () => {
  const component = shallow(<MetaComponent />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
