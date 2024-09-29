import { shallow } from 'enzyme';

import RecoverPasswordModal from '../component';

describe('RecoverPasswordModal component', () => {
  const component = shallow(<RecoverPasswordModal />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
