import { shallow } from 'enzyme';

import DeactivatedByAdminModal from '../component';

const mockedHookData = {
  onConfirmHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('DeactivatedByAdminModal component', () => {
  const component = shallow(<DeactivatedByAdminModal />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
