import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { pick } from 'ramda';

import {
  ACCOMMODATION_LISTING_FILTER_KEYS,
  LISTING_FILTER_KEY,
} from 'constants/listing/manageListings';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import SvgIcon from 'views/shared/SvgIcon';

import AccommodationFilter from './AccommodationFilter';
import AmenitiesFilter from './AmenitiesFilter';
import StatusFilter from './StatusFilter';

const Filters = ({ amenities, filters, onFilter, onSearch, searchQuery }) => {
  const formattedOrRawMessage = useFormattedOrRawMessage();

  return (
    <div className="table-head d-flex mb-24">
      <Form layout="inline" size="middle">
        <Form.Item>
          <Input.Search
            allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
            className="max-width-364"
            enterButton={<SvgIcon icon="search" />}
            placeholder={formattedOrRawMessage({ id: 'shared.searchListing' })}
            onChange={onSearch}
            defaultValue={searchQuery}
          />
        </Form.Item>
        <AccommodationFilter
          filters={pick(ACCOMMODATION_LISTING_FILTER_KEYS, filters)}
          onFilter={onFilter}
        />
        <AmenitiesFilter
          amenities={amenities}
          filters={pick([LISTING_FILTER_KEY.AMENITIES_IN], filters)}
          onFilter={onFilter}
        />
        <StatusFilter filters={pick([LISTING_FILTER_KEY.STATUS_IN], filters)} onFilter={onFilter} />
      </Form>
    </div>
  );
};

Filters.defaultProps = {
  searchQuery: null,
};

Filters.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.shape().isRequired,
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};

export default Filters;
