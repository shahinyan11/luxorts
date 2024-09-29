import { shallow } from 'enzyme';

import RemovePhotoModal from '../component';

const mockedHookData = { handleRemove: jest.fn(), isLoading: false };
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('RemovePhotoModal component', () => {
  const props = {
    title: { id: 'shared.id' },
    onClose: jest.fn(),
  };

  const component = shallow(<RemovePhotoModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
