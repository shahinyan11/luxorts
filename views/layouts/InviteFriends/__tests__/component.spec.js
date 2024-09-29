import { shallow } from 'enzyme';

import InviteFriendsLayout from '../component';

describe('InviteFriendsLayout component', () => {
  const component = shallow(<InviteFriendsLayout>Foo</InviteFriendsLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
