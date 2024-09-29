import { shallow } from 'enzyme';

import Index from '../component';

describe('Index component', () => {
  const component = shallow(<Index />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
