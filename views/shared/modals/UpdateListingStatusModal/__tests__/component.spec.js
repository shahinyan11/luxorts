import { shallow } from 'enzyme';

import UpdateListingStatusModal from '../component';

const mockedHookData = { isLoading: false, onConfirm: jest.fn() };
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('UpdateListingStatusModal component', () => {
  const props = {
    title: { id: 'title.id' },
    subtitle: { id: 'subtitle.id' },
    description: { id: 'description.id' },
    confirmBtnText: { id: 'confirmBtnText.id' },
    confirmBtnProps: { foo: 'bar' },
    id: 'id',
    status: 'status',
    onClose: jest.fn(),
  };
  const component = shallow(<UpdateListingStatusModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
