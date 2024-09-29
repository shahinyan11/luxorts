import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { pathOr, propOr } from 'ramda';
import { useEffect, useMemo, useRef, useState } from 'react';

import ROUTES from 'constants/routes';
import { NEW_YORK_COORDS } from 'constants/googleMaps';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';
import useMount from 'hooks/useMount';

import { updateListingLocation } from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingLocationEndpoint,
  updateListingLocationEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { clearGeocoder, fetchGeocoder } from 'state/concepts/googleMaps/actions';
import { geocoderSelector } from 'state/concepts/googleMaps/selectors';

const useListingLocationMap = ({ shouldRedirect = false, message }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = useFormSubmit(updateListingLocation);

  const listingId = router.query?.listingId;

  // local state
  const [coords, setCoords] = useState({ lng: null, lat: null });
  const [isDirty, setIsDirty] = useState(false);

  // refs
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingLocationEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingLocationEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const geocoder = useSelector(geocoderSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isLocationFetching = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isLocationFetching;

  // prepare data
  const stepStatus = listing?.applicationStep;
  const location = geocoder[0] || listing?.listingLocation;
  const initialValues = {
    country: propOr(null, 'country', location),
    street: propOr('', 'street', location),
    apartmentNumber: pathOr('', ['listingLocation', 'apartmentNumber'], listing),
    city: propOr('', 'city', location),
    state: propOr(null, 'state', location),
    zipCode: propOr('', 'zipCode', location),
    longitude: coords.lng || propOr(NEW_YORK_COORDS[0], 'longitude', location),
    latitude: coords.lat || propOr(NEW_YORK_COORDS[1], 'latitude', location),
    listingId,
    message,
    redirectRoute: shouldRedirect
      ? createRoute({
          pathname: ROUTES.ADD_NEW_LISTING.AMENITIES.PATH,
          id: listingId,
        })
      : null,
  };
  const mapCenter = useMemo(
    () => ({ lat: initialValues.latitude, lng: initialValues.longitude }),
    [initialValues.latitude, initialValues.longitude],
  );
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.LOCATION.PATH,
    id: listingId,
  });

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
  });

  /**
   * Handle update map center
   */
  const updateMapCenter = () => {
    if (!mapRef.current || !markerRef.current) {
      return false;
    }

    mapRef.current.setCenter(mapCenter);
    markerRef.current.setPosition(mapCenter);

    return true;
  };

  /**
   * Map on drag handler
   */
  const onMapDragHandler = () => {
    markerRef.current.setPosition(mapRef.current.getCenter());
  };

  /**
   * Map on drag end handler
   */
  const onMapDragEndHandler = () => {
    const { lng, lat } = mapRef.current.getCenter();

    dispatch(fetchGeocoder({ query: `${lat()},${lng()}`, reverse: true }));
    setCoords({ lng: lng(), lat: lat() });
    setIsDirty(true);
  };

  /**
   * Create map
   */
  const createMap = () => {
    if (!mapContainerRef.current || mapRef.current) {
      return false;
    }

    mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
      zoom: 18,
      center: mapCenter,
      draggable: true,
    });

    markerRef.current = new window.google.maps.Marker({
      position: mapCenter,
      map: mapRef.current,
      draggable: false,
    });

    mapRef.current.addListener('drag', onMapDragHandler);
    mapRef.current.addListener('dragend', onMapDragEndHandler);

    return true;
  };

  /**
   * On component mount handler
   */
  const onMountHandler = () => () => {
    dispatch(clearGeocoder());
  };

  /**
   * Lifecycle
   */
  useEffect(createMap);
  useMount(onMountHandler);
  useEffect(updateMapCenter, [mapCenter]);

  return {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    mapContainerRef,
    mapRef,
    markerRef,
    coords,
    onBackRoute,
    isDirty,
    createMap,
    onMapDragEndHandler,
    onMapDragHandler,
    updateMapCenter,
    onMountHandler,
  };
};

export default useListingLocationMap;
