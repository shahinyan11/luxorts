import { shallow } from 'enzyme';

import Email from '../component';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserEmailSelector: jest.fn(() => 'test@mail.com'),
}));

describe('Email component', () => {
  const component = shallow(<Email />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
