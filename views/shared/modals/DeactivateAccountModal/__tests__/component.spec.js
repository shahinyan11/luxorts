import { shallow } from 'enzyme';

import DeactivateAccountModal from '../component';

describe('DeactivateAccountModal component', () => {
  const component = shallow(<DeactivateAccountModal />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
