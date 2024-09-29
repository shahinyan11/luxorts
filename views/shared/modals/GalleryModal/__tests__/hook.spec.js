import { act, renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

const mockedSwiper = {
  slidePrev: jest.fn(),
  slideNext: jest.fn(),
  slideTo: jest.fn(),
};
jest.mock('react', () => {
  const originReact = jest.requireActual('react');

  return {
    ...originReact,
    useRef: jest.fn(() => ({ current: { swiper: mockedSwiper } })),
  };
});

describe('GalleryModal useContainer hook', () => {
  let result = null;

  const props = { initialSlide: 0 };

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('slidePrev method should calls swiper.slidePrev', () => {
    result.current.slidePrev();

    expect(mockedSwiper.slidePrev).toHaveBeenCalled();
  });

  it('slideNext method should calls swiper.slideNext', () => {
    result.current.slideNext();

    expect(mockedSwiper.slideNext).toHaveBeenCalled();
  });

  it('onSlideChangeHandler method should sets activeIndex', () => {
    act(() => {
      result.current.onSlideChangeHandler({ activeIndex: 1 });
    });

    expect(result.current.activeIndex).toBe(1);
  });

  it('onMountHandler method should calls swiper.slideTo with activeIndex', () => {
    result.current.onMountHandler();

    expect(mockedSwiper.slideTo).toHaveBeenCalledWith(props.initialSlide);
  });
});
