import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Tag } from 'antd';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { debounce } from 'lodash';

import {
  LISTING_FILTERS,
  LISTING_TABLE_COLUMNS_KEY,
  LISTING_TABLE_SETTINGS,
  LISTING_TAG_BY_STATUS,
} from 'constants/listing/manageListings';

import checkUserVerification from 'utils/auth/checkUserVerification';
import isPresent from 'utils/isPresent';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useAntdDropdownVisible from 'hooks/useAntdDropdownVisible';
import useMount from 'hooks/useMount';

import {
  fetchListingBaseAmenities,
  fetchListings,
  filterListings,
  setListingsPage,
  setListingsSearchQuery,
  setListingsSortOrder,
  setListingTableSettings,
} from 'state/concepts/listings/actions';
import {
  appliedFiltersSelector,
  baseAmenitiesSelector,
  filtersSelector,
  listingsSelector,
  listingsTotalSelector,
  listingTableSettingsSelector,
  paginationSelector,
  searchQuerySelector,
  sortSelector,
} from 'state/concepts/listings/selectors';
import { fetchListingsEndpoint } from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { dataDeleteEntity } from 'state/data/actions';

import Settings from './Settings';
import ListingColumn from './ListingColumn';

const TIME_FORMAT = 'MMM D, YYYY';

function useContainer() {
  const dispatch = useDispatch();
  const [settingsVisible, onSettingsVisibleChangeHandler] = useAntdDropdownVisible();

  // endpoints
  const { endpoint } = fetchListingsEndpoint;

  // selectors
  const listings = useSelector(listingsSelector);
  const pagination = useSelector(paginationSelector);
  const sort = useSelector(sortSelector);
  const total = useSelector(listingsTotalSelector);
  const settings = useSelector(listingTableSettingsSelector);
  const filters = useSelector(filtersSelector);
  const searchQuery = useSelector(searchQuerySelector);
  const appliedFilters = useSelector(appliedFiltersSelector);
  const amenities = useSelector(baseAmenitiesSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);

  // prepare data from listings
  const dataSource = useMemo(
    () =>
      listings.map((listing) => ({
        key: listing.id,
        [LISTING_TABLE_COLUMNS_KEY.LISTING]: <ListingColumn listing={listing} />,
        [LISTING_TABLE_COLUMNS_KEY.HIDDEN_TITLE]: listing.hiddenTitle || '-',
        [LISTING_TABLE_COLUMNS_KEY.GUESTS]: listing.guestsNumber || 0,
        [LISTING_TABLE_COLUMNS_KEY.BEDROOMS]: listing.bedroomsAmount || 0,
        [LISTING_TABLE_COLUMNS_KEY.BEDS]: listing.bedsAmount || 0,
        [LISTING_TABLE_COLUMNS_KEY.BATHS]: listing.bathroomsAmount || 0,
        [LISTING_TABLE_COLUMNS_KEY.LOCATION]: listing.location || '-',
        [LISTING_TABLE_COLUMNS_KEY.DATE_CREATED]: moment(listing.createdAt).format(TIME_FORMAT),
        [LISTING_TABLE_COLUMNS_KEY.LAST_UPDATED]: moment(listing.updatedAt).format(TIME_FORMAT),
        [LISTING_TABLE_COLUMNS_KEY.STATUS]: (
          <Tag className={classNames('tag', LISTING_TAG_BY_STATUS[listing.status].CLASSNAME)}>
            <FormattedMessage {...LISTING_TAG_BY_STATUS[listing.status].TITLE} />
          </Tag>
        ),
        [LISTING_TABLE_COLUMNS_KEY.SETTINGS]: (
          <Settings id={listing.id} status={listing.status} stepStatus={listing.applicationStep} />
        ),
      })),
    [listings],
  );
  const tableColumns = useMemo(
    () => LISTING_TABLE_SETTINGS.filter((item) => settings.includes(item.key)),
    [settings],
  );
  const hasAppliedFilters = isPresent(appliedFilters);

  /**
   * On sort click handler
   * @param sortKey {string}
   * @return {(function(): void)|*}
   */
  const onSortClickHandler = useImmutableCallback((sortKey) => () => {
    dispatch(setListingsSortOrder(sortKey));
    dispatch(fetchListings({ skipLoading: true }));
  });

  /**
   * On pagination change handler
   * @param pageNumber {number}
   */
  const onPaginationChangeHandler = useImmutableCallback((pageNumber) => {
    dispatch(setListingsPage(pageNumber));
    dispatch(fetchListings({ skipLoading: true }));
  });

  /**
   * On settings change handler
   * @param checkedValues {array}
   */
  const onSettingsChangeHandler = useImmutableCallback((checkedValues) => {
    dispatch(setListingTableSettings(checkedValues));
  });

  /**
   * On filter callback
   * @param selectedFilters {object}
   */
  const onFilter = useImmutableCallback((selectedFilters) => {
    dispatch(filterListings(selectedFilters));
  });

  /**
   * Clear all filters button click
   */
  const clearAllFilters = useImmutableCallback(() => {
    dispatch(filterListings(LISTING_FILTERS));
  });

  /**
   * On search callback
   * @param query {string}
   */
  const onSearch = useImmutableCallback(
    debounce((event) => {
      dispatch(setListingsSearchQuery(event.target.value || null));
      dispatch(setListingsPage(1));
      dispatch(fetchListings({ skipLoading: true }));
    }, 250),
  );

  /**
   * On component unmount handler
   */
  const onUnmountHandler = () => () => {
    dispatch(dataDeleteEntity('listing'));
  };

  /**
   * Lifecycle
   */
  useMount(onUnmountHandler);

  return {
    total,
    isFetching,
    tableColumns,
    dataSource,
    sort,
    pagination,
    settingsVisible,
    settings,
    filters,
    searchQuery,
    amenities,
    hasAppliedFilters,
    onSortClickHandler,
    onPaginationChangeHandler,
    onSettingsChangeHandler,
    onSettingsVisibleChangeHandler,
    onFilter,
    clearAllFilters,
    onSearch,
    onUnmountHandler,
  };
}

export const getInitialProps = async (ctx) => {
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  ctx.store.dispatch(setListingsPage(1));
  ctx.store.dispatch(fetchListings());
  ctx.store.dispatch(fetchListingBaseAmenities());
};

export default useContainer;
