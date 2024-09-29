import { shallow } from 'enzyme';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer from '../hook';
import AccountSettings from '../component';

const mockedHookData = {
  currentUser: mockedCurrentUser,
  handleUploadAvatarClick: jest.fn(),
  handleRemoveAvatarClick: jest.fn(),
  handleChangeFile: jest.fn(),
  handleChangeAvatarImage: jest.fn(),
  avatarImgUrl: 'avatarImgUrl',
  inputFileRef: jest.fn(),
};

jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('AccountSettings component', () => {
  let component = shallow(<AccountSettings />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when avatarImgUrl isn`t present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      avatarImgUrl: null,
    });

    component = shallow(<AccountSettings />);

    expect(component).toMatchSnapshot();
  });
});
