import { shallow } from 'enzyme';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import UserDropdown from '../component';

const mockedHookData = {
  onLogOutHandler: jest.fn(),
  currentUser: mockedCurrentUser,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('UserDropdown component', () => {
  const component = shallow(<UserDropdown />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
