import { useRef, useState } from 'react';

import useMount from 'hooks/useMount';
import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ initialSlide }) {
  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const swiperRef = useRef();

  /**
   * Go to previous slide
   */
  const slidePrev = useImmutableCallback(() => {
    swiperRef.current.swiper.slidePrev();
  });

  /**
   * Go to next slide
   */
  const slideNext = useImmutableCallback(() => {
    swiperRef.current.swiper.slideNext();
  });

  /**
   * On slide change handler
   * @param swiper {object}
   */
  const onSlideChangeHandler = useImmutableCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
  });

  /**
   * On component mount handler
   */
  const onMountHandler = () => {
    swiperRef.current.swiper.slideTo(activeIndex);
  };

  /**
   * Lifecycle
   */
  useMount(onMountHandler);

  return {
    swiperRef,
    activeIndex,
    slidePrev,
    slideNext,
    onSlideChangeHandler,
    onMountHandler,
  };
}

export default useContainer;
