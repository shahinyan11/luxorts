import { useMemo } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { compose, pathOr, propEq, filter, head, prop } from 'ramda';

import { LISTING_PLACE_TYPE } from 'constants/listing';

import isPresent from 'utils/isPresent';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';

import { createUpdateListing } from 'state/concepts/listings/actions';
import {
  listingsBasePropertyTypesSelector,
  listingSelector,
} from 'state/concepts/listings/selectors';
import {
  fetchListingsBasePropertyTypesEndpoint,
  createListingEndpoint,
  updateListingPropertyTypeEndpoint,
  fetchListingEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/listing/propertyType';

function useListingPropertyType({ shouldRedirect, message }) {
  const router = useRouter();
  const onSubmit = useFormSubmit(createUpdateListing);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingsBasePropertyTypesEndpoint;
  const { endpoint: createEndpoint } = createListingEndpoint;
  const { endpoint: fetchEndpoint } = fetchListingEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingPropertyTypeEndpoint(listingId);

  // selectors
  const propertyTypesOptions = useSelector(listingsBasePropertyTypesSelector);
  const listing = useSelector((state) => listingSelector(state, listingId));
  const isFetchingBasePropertyTypes = useParametricSelector(loadingSelectorCreator, endpoint);
  const isCreateLoading = useParametricSelector(loadingSelectorCreator, createEndpoint);
  const isUpdateLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);
  const isFetching = useParametricSelector(loadingSelectorCreator, fetchEndpoint);

  // loaders and skeletons conditions
  const listingDoesntExist = isPresent(listingId) && !isPresent(listing);
  const isLoading = isCreateLoading || isUpdateLoading;
  const showSkeleton = isFetchingBasePropertyTypes || isFetching || listingDoesntExist;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const propertyTypeId = pathOr(null, ['listingPropertyType', 'propertyType', 'id'], listing);
  const typeOfPlace = pathOr(
    LISTING_PLACE_TYPE.ENTIRE_ROOM,
    ['listingPropertyType', 'typeOfPlace'],
    listing,
  );

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      listingPropertyType: {
        propertyTypeId,
        typeOfPlace,
      },
      listingId,
      shouldRedirect,
      message,
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Tooltip for selected property type
   * @type {string|undefined}
   */
  const tooltip = useMemo(() => {
    const { listingPropertyType } = formik.values;

    return compose(
      prop('description'),
      head,
      filter(propEq('value', listingPropertyType.propertyTypeId)),
    )(propertyTypesOptions);
  }, [formik.values, propertyTypesOptions]);

  return {
    formik,
    propertyTypesOptions,
    showSkeleton,
    isLoading,
    stepStatus,
    tooltip,
  };
}

export default useListingPropertyType;
