import { shallow } from 'enzyme';

import LoginAndSecurity from '../component';

const mockedHookData = {
  updateMode: false,
  recoverMode: false,
  toggleUpdateMode: jest.fn(),
  handleRecoverClick: jest.fn(),
  lastUpdatedDate: 'date',
};

jest.mock('../hook', () => jest.fn(() => mockedHookData));
jest.mock('state/concepts/users/selectors', () => ({
  passwordUpdatedDateSelector: jest.fn(() => 'date'),
}));

describe('LoginAndSecurity component', () => {
  const component = shallow(<LoginAndSecurity />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
