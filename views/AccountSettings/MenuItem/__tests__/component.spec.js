import { shallow } from 'enzyme';

import MenuItem from '../component';

describe('MenuItem component', () => {
  const props = {
    href: '#',
    icon: 'cross',
    title: { id: 'shared.id' },
    description: { id: 'shared.id' },
  };

  const component = shallow(<MenuItem {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
