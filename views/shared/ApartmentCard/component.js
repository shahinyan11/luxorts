import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

import SvgIcon from 'views/shared/SvgIcon';

const ApartmentCard = ({
  title,
  description,
  guestsNumber,
  bedroomsAmount,
  bedsAmount,
  bathsAmount,
  pricePerDay,
  limitedListingPhotos,
}) => (
  <div className="apartment-card">
    <Carousel className="apartment-card__slider">
      {limitedListingPhotos?.map(({ id, photoUrls }) => (
        <img key={id} alt="" className="apartment-card__image" src={photoUrls.small} />
      ))}
    </Carousel>
    <Link href="#">
      <a className="apartment-card__share">
        <SvgIcon icon="share" />
      </a>
    </Link>
    <Link href="#">
      <a className="apartment-card__like">
        <SvgIcon icon="like" />
      </a>
    </Link>
    <div className="apartment-card__content">
      <h3 className="apartment-card__title mb-0">
        <Link href="#">
          <a>{title}</a>
        </Link>
      </h3>
      <p className="apartment-card__description">{description}</p>
      <div className="apartment-card__wrapper d-flex justify-content-space-between">
        <div className="apartment-card__info d-flex align-items-center">
          <FormattedMessage
            id={guestsNumber > 1 ? 'shared.guestsAmount' : 'shared.guestAmount'}
            values={{ amount: guestsNumber }}
          />
          <SvgIcon icon="dot" className="apartment-card__dot" />
          <FormattedMessage
            id={bedroomsAmount > 1 ? 'shared.bedroomsAmount' : 'shared.bedroomAmount'}
            values={{ amount: bedroomsAmount }}
          />
          <SvgIcon icon="dot" className="apartment-card__dot" />
          <FormattedMessage
            id={bedsAmount > 1 ? 'shared.bedsAmount' : 'shared.bedAmount'}
            values={{ amount: bedsAmount }}
          />
          <SvgIcon icon="dot" className="apartment-card__dot" />
          <FormattedMessage
            id={bathsAmount > 1 ? 'shared.bathsAmount' : 'shared.bathAmount'}
            values={{ amount: bathsAmount }}
          />
        </div>
        <p className="apartment-card__price mb-0">
          <span className="apartment-card__text">
            <FormattedMessage
              id="shared.priceNight"
              values={{
                price: <span className="apartment-card__accent">{`$${pricePerDay}`}</span>,
              }}
            />
          </span>
        </p>
      </div>
    </div>
  </div>
);

ApartmentCard.defaultProps = {
  title: '',
  description: '',
  guestsNumber: 0,
  bedroomsAmount: 0,
  bathsAmount: 0,
  bedsAmount: 0,
  pricePerDay: 0,
  limitedListingPhotos: null,
};

ApartmentCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  guestsNumber: PropTypes.number,
  bedroomsAmount: PropTypes.number,
  bathsAmount: PropTypes.number,
  bedsAmount: PropTypes.number,
  pricePerDay: PropTypes.number,
  limitedListingPhotos: PropTypes.arrayOf(PropTypes.shape()),
};

export default ApartmentCard;
