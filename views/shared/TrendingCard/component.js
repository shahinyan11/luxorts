import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

const TrendingCard = ({ country, city, image, small }) => (
  <Link href="#">
    <a className="trending__card">
      <Image
        alt=""
        className="trending__img"
        src={image}
        width={small ? '364' : '558'}
        height="238"
      />
      <div className="trending__content">
        <h3 className="trending__subtitle mb-4">{country}</h3>
        <p className="trending__state mb-0">{city}</p>
      </div>
    </a>
  </Link>
);

TrendingCard.defaultProps = {
  small: false,
};

TrendingCard.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default TrendingCard;
