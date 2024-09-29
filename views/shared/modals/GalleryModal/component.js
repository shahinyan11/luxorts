import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const GalleryModal = ({ onClose, initialSlide, photos }) => {
  const { swiperRef, activeIndex, slidePrev, slideNext, onSlideChangeHandler } = useContainer({
    initialSlide,
  });

  return (
    <Modal
      visible
      className="modal-gallery"
      onCancel={onClose}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={null}
    >
      <div className="modal__content">
        <p className="modal__text text-align-center mb-32 mb-lg-124">
          {`${activeIndex + 1} / `}
          <span className="modal__text-note">{photos.length}</span>
        </p>
        <Swiper ref={swiperRef} onSlideChange={onSlideChangeHandler}>
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <div className="modal-gallery__slide-inner ml-auto mr-auto">
                <Image
                  blurDataURL={photo.photoUrls?.small || photo.src}
                  src={photo.photoUrls?.original || photo.src}
                  loading="eager"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  alt=""
                />
              </div>
              <p className="modal__text text-align-center mt-24 mb-0 mb-lg-112">
                {photo.description}
              </p>
            </SwiperSlide>
          ))}
          <GradientButton
            onClick={slidePrev}
            className="modal-gallery__nav modal-gallery__nav--prev main-btn--icon"
            variant="secondary"
            addonBefore={<SvgIcon icon="arrow-left" />}
            disabled={activeIndex === 0}
          />
          <GradientButton
            onClick={slideNext}
            className="modal-gallery__nav modal-gallery__nav--next main-btn--icon"
            variant="secondary"
            addonBefore={<SvgIcon icon="arrow-right" />}
            disabled={activeIndex === photos.length - 1}
          />
        </Swiper>
      </div>
    </Modal>
  );
};

GalleryModal.defaultProps = {
  onClose: undefined,
  initialSlide: 0,
};

GalleryModal.propTypes = {
  onClose: PropTypes.func,
  initialSlide: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GalleryModal;
