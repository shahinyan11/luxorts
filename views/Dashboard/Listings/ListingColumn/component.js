import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import ROUTES from 'constants/routes';
import { LISTING_IMAGE_PLACEHOLDER } from 'constants/listing';

import { createRoute } from 'utils/createRouteHelpers';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const ListingColumn = ({ listing }) => {
  const title = listing.title ||
    listing.location ||
    listing.mainListingPhoto?.description || { id: 'shared.withoutTitle' };
  const listingDetailsRoute = createRoute({ pathname: ROUTES.LISTING.PATH, id: listing.id });

  return (
    <div className="d-flex align-items-center">
      <div className="mr-8 mr-sm-16">
        <Link href={listingDetailsRoute}>
          <a>
            <Image
              alt=""
              width="68"
              height="48"
              src={listing?.mainListingPhoto?.photoUrls?.medium || LISTING_IMAGE_PLACEHOLDER}
              className="table__housing-img"
            />
          </a>
        </Link>
      </div>
      <p className="mb-0 table__column-name">
        <Link href={listingDetailsRoute}>
          <a>
            <FormattedOrRawMessage message={title} />
          </a>
        </Link>
      </p>
    </div>
  );
};

ListingColumn.propTypes = {
  listing: PropTypes.shape().isRequired,
};

export default ListingColumn;
