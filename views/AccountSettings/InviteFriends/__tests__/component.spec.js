import { shallow } from 'enzyme';

import mockedUserInvitation from 'views/__mocks__/mockedUserInvitation';
import mockedPagination from 'views/__mocks__/mockedPagination';

import InviteFriends from '../component';

jest.mock('state/concepts/session/selectors', () => ({
  userInvitationSelector: jest.fn(() => mockedUserInvitation),
  paginationSelector: jest.fn(() => mockedPagination),
  userInvitationCountSelector: jest.fn(() => 1),
}));

describe('InviteFriends component', () => {
  const component = shallow(<InviteFriends />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
