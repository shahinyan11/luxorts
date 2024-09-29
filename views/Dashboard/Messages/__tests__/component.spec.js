import { shallow } from 'enzyme';

import Messages from '../component';

describe('Messages component', () => {
  const component = shallow(<Messages />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
