import { shallow } from 'enzyme';

import DeactivatedByUserModal from '../component';

const mockedHookData = {
  onConfirmHandler: jest.fn(),
  onCancelHandler: jest.fn(),
  isLoading: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('DeactivatedByUserModal component', () => {
  const component = shallow(<DeactivatedByUserModal />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
