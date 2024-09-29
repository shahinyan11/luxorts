import { shallow } from 'enzyme';

import PhoneNumberConfirm from '../component';

jest.mock('state/concepts/session/selectors', () => ({
  userNewPhoneSelector: jest.fn(() => 'phone'),
}));

describe('PhoneNumberConfirm component', () => {
  const component = shallow(<PhoneNumberConfirm />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
