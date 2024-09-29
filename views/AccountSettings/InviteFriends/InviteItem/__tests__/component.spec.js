import { shallow } from 'enzyme';

import InviteItem from '../component';

describe('InviteItem component', () => {
  const props = {
    email: 'test@gmail.com',
    id: 'testId',
  };

  const component = shallow(<InviteItem {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
