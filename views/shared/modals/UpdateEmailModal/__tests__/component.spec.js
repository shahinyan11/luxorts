import { shallow } from 'enzyme';

import UpdateEmailModal from '../component';

describe('UpdateEmailModal component', () => {
  const props = {
    email: 'email',
  };

  const component = shallow(<UpdateEmailModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
