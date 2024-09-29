import { shallow } from 'enzyme';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import PhoneNumber from '../component';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
  userNewPhoneSelector: jest.fn(() => 'phone'),
}));

describe('PhoneNumber component', () => {
  const component = shallow(<PhoneNumber />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
