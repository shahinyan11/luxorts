import { shallow } from 'enzyme';

import UpdatePassword from '../component';

describe('UpdatePassword component', () => {
  const props = {
    onCancel: jest.fn(),
  };

  const component = shallow(<UpdatePassword {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
