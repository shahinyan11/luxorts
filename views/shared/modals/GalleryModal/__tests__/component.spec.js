import { shallow } from 'enzyme';

import GalleryModal from '../component';

const mockedHookData = {
  swiperRef: { current: {} },
  activeIndex: 0,
  slidePrev: jest.fn(),
  slideNext: jest.fn(),
  onSlideChangeHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('GalleryModal component', () => {
  const props = {
    onClose: jest.fn(),
    initialSlide: 0,
    photos: [{ id: 'id', src: 'src', description: 'description' }],
  };
  const component = shallow(<GalleryModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
