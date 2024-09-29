import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { propOr } from 'ramda';

import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import { updateListingLocation } from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingLocationEndpoint,
  updateListingLocationEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/listing/location';

const useListingLocation = ({ shouldRedirect = false, message }) => {
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingLocation);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingLocationEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingLocationEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isLocationFetching = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isLocationFetching;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const location = listing?.listingLocation;
  const initialValues = {
    country: propOr(null, 'country', location),
    street: propOr('', 'street', location),
    apartmentNumber: propOr('', 'apartmentNumber', location),
    city: propOr('', 'city', location),
    state: propOr(null, 'state', location),
    zipCode: propOr('', 'zipCode', location),
    listingId,
    redirectRoute: shouldRedirect
      ? createRoute({
          pathname: ROUTES.ADD_NEW_LISTING.LOCATION_MAP.PATH,
          id: listingId,
        })
      : null,
    message,
    longitude: null,
    latitude: null,
  };
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.ACCOMMODATION.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    onBackRoute,
  };
};

export default useListingLocation;
