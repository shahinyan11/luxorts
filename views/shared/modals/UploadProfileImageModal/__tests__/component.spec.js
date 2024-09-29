import { shallow } from 'enzyme';

import useContainer from '../hook';
import UploadProfileImageModal from '../component';

const mockedHookData = {
  onCropChange: jest.fn(),
  onImageLoad: jest.fn(),
  onFileChange: jest.fn(),
  onSave: jest.fn(),
  imgSrc: 'imgSrc',
  isLoading: false,
  crop: 'crop',
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('UploadProfileImageModal component', () => {
  const props = {
    title: { id: 'shared.id' },
    onClose: jest.fn(),
    initialImgSrc: 'initialImgSrc',
  };

  let component = shallow(<UploadProfileImageModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when imgSrc isn`t present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      imgSrc: undefined,
    });

    component = shallow(<UploadProfileImageModal {...props} />);

    expect(component).toMatchSnapshot();
  });
});
