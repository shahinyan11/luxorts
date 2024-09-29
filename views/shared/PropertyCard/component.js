import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

const PropertyCard = ({ name, listingsCount, image }) => (
  <Link href="#">
    <a href="#" className="property__card">
      {image && <Image alt="" width="267" height="188" className="property__img" src={image} />}
      <div className="property__content">
        <h3 className="property__subtitle mb-4">{name}</h3>
        <p className="property__text mb-0">{`${listingsCount} ${name}s`}</p>
      </div>
    </a>
  </Link>
);

PropertyCard.defaultProps = {
  name: '',
  listingsCount: 0,
  image: '',
};

PropertyCard.propTypes = {
  name: PropTypes.string,
  listingsCount: PropTypes.number,
  image: PropTypes.string,
};

export default PropertyCard;
