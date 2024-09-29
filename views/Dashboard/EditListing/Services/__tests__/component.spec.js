import { shallow } from 'enzyme';

import Services from '../component';

describe('Services component', () => {
  const component = shallow(<Services />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
