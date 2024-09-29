import { shallow } from 'enzyme';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import UserAvatar from '../component';

describe('UserAvatar component', () => {
  const props = { currentUser: mockedCurrentUser, size: 'xl' };
  const component = shallow(<UserAvatar {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when className is present', () => {
    component.setProps({
      className: 'className',
    });

    expect(component).toMatchSnapshot();
  });
});
