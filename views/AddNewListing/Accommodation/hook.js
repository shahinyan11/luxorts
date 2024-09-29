import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { propOr } from 'ramda';
import { v4 as uuid } from 'uuid';

import { ANTD_CLASSNAME, DIRECTION } from 'constants';
import ROUTES from 'constants/routes';
import {
  ACCOMMODATION_VALIDATION,
  DEFAULT_BATHROOM_CONFIG,
  DEFAULT_BEDROOM_CONFIG,
  INITIAL_BEDROOM,
  INITIAL_BATHROOM,
} from 'constants/listing';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import disableHtmlElementsByClassName from 'utils/disableHtmlElementsByClassName';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';

import useParametricSelector from 'hooks/useParametricSelector';
import useMount from 'hooks/useMount';
import useFormSubmit from 'hooks/useFormSubmit';

import {
  fetchListing,
  fetchListingAccomodation,
  updateListingAccomodation,
} from 'state/concepts/listings/actions';
import { listingSelector } from 'state/concepts/listings/selectors';
import {
  fetchListingEndpoint,
  fetchListingAccomodationEndpoint,
  updateListingAccomodationEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import validationSchema from 'lib/yupLocalised/scheme/listing/accommodation';

function useContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = useFormSubmit(updateListingAccomodation);

  const listingId = router.query?.listingId;

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingAccomodationEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingAccomodationEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isAccomodationFetching = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing) || isAccomodationFetching;

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const accommodation = listing?.listingAccomodation;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.PROPERTY_TYPE.PATH,
    id: listingId,
  });

  /**
   * Make bedroom helper
   * @param bed {object}
   * @returns {object}
   */
  const makeBedroomHelper = (bed) => ({
    ...bed,
    bedsForDeleting: [],
  });

  /**
   * Make bathroom helper
   * @param bath {object}
   * @returns {object}
   */
  const makeBathroomHelper = (bath) => ({
    ...bath,
    bathsForDeleting: [],
  });

  /**
   * Prepare formik initial values
   * @type {object}
   */
  const initialValues = useMemo(() => {
    const bedrooms = accommodation?.listingBedrooms?.map(makeBedroomHelper) || [INITIAL_BEDROOM];
    const bathrooms = accommodation?.listingBathrooms?.map(makeBathroomHelper) || [
      INITIAL_BATHROOM,
    ];

    return {
      guestsNumber: propOr(ACCOMMODATION_VALIDATION.BASE.MIN, 'guestsNumber', accommodation),
      listingBedrooms: propOr(ACCOMMODATION_VALIDATION.BASE.MIN, 'bedroomsAmount', accommodation),
      bedsAmount: propOr(ACCOMMODATION_VALIDATION.BASE.MIN, 'bedsAmount', accommodation),
      listingBathrooms: propOr(ACCOMMODATION_VALIDATION.BASE.MIN, 'bathroomsAmount', accommodation),
      bedroomsForDeleting: [],
      bathroomsForDeleting: [],
      bedrooms,
      bathrooms,
      listingId,
      redirectRoute: createRoute({ pathname: ROUTES.ADD_NEW_LISTING.LOCATION.PATH, id: listingId }),
    };
  }, [accommodation, listingId]);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  /**
   * Total beds amount from all bedrooms
   * @type {number}
   */
  const totalBedsAmount = useMemo(() => {
    let total = 0;

    formik.values.bedrooms.forEach((bedroom) => {
      [...bedroom.defaultBeds, ...bedroom.customBeds].forEach((bed) => {
        total += bed.amount;
      });
    });

    return total;
  }, [formik.values.bedrooms]);

  /**
   * Handle change listing bedrooms amount
   * @param amount {number}
   */
  const onListingBedroomsChange = useCallback(
    (amount) => {
      const { bedrooms } = formik.values;
      const value = [...bedrooms];

      const formikState = {
        ...formik,
        values: {
          ...formik.values,
        },
      };

      if (!isPresent(amount)) {
        return;
      }

      // increase operation
      if (bedrooms.length < amount) {
        value.push({ uuid: uuid(), ...DEFAULT_BEDROOM_CONFIG });
      } else {
        const deletedItem = value.pop();

        // save deleted item id
        if (isPresent(deletedItem.id)) {
          formikState.values.bedroomsForDeleting.push({
            id: deletedItem.id,
            delete: true,
          });
        }
      }

      formikState.values.bedrooms = value;

      formik.setFormikState(formikState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values],
  );

  /**
   * Handle change listing bathrooms amount
   * @param amount {number}
   */
  const onListingBathroomsChange = useCallback(
    (amount) => {
      const { bathrooms } = formik.values;
      const value = [...bathrooms];
      const formikState = {
        ...formik,
        values: {
          ...formik.values,
        },
      };

      if (!isPresent(amount)) {
        return;
      }

      // increase operation
      if (bathrooms.length < amount) {
        value.push({ uuid: uuid(), ...DEFAULT_BATHROOM_CONFIG });
      } else {
        const deletedItem = value.pop();

        // save deleted item id
        if (isPresent(deletedItem.id)) {
          formikState.values.bathroomsForDeleting.push({
            id: deletedItem.id,
            delete: true,
          });
        }
      }

      formikState.values.bathrooms = value;

      formik.setFormikState(formikState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values],
  );

  /**
   * Create custom bed field add handler
   * @param bedroomIdx {number}
   * @returns {(function(): void)|*}
   */
  const handleAddCustomBedCreator = useCallback(
    (bedroomIdx) => () => {
      const { customBeds } = formik.values.bedrooms[bedroomIdx];

      const value = [
        ...customBeds,
        { uuid: uuid(), kind: '', amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN },
      ];

      formik.setFieldValue(`bedrooms[${bedroomIdx}].customBeds`, value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values],
  );

  /**
   * Create custom bath field add handler
   * @param bathroomIdx {number}
   * @returns {(function(): void)|*}
   */
  const handleAddCustomBathCreator = useCallback(
    (bathroomIdx) => () => {
      const { customBaths } = formik.values.bathrooms[bathroomIdx];

      const value = [
        ...customBaths,
        { uuid: uuid(), kind: '', amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN },
      ];

      formik.setFieldValue(`bathrooms[${bathroomIdx}].customBaths`, value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values],
  );

  /**
   * Create custom bed field remove handler
   * @param bedroomIdx {number}
   * @param index {number}
   * @param deletedItem {object}
   * @returns {(function(): void)|*}
   */
  const handleRemoveCustomBedCreator = useCallback(
    ({ bedroomIdx, index, deletedItem }) =>
      () => {
        const { customBeds } = formik.values.bedrooms[bedroomIdx];
        const formikState = {
          ...formik,
          values: {
            ...formik.values,
          },
        };

        const value = [...customBeds];
        value.splice(index, 1);

        // save deleted item id
        if (isPresent(deletedItem.id)) {
          formikState.values.bedrooms[bedroomIdx].bedsForDeleting.push({
            id: deletedItem.id,
            delete: true,
          });
        }

        formikState.values.bedrooms[bedroomIdx].customBeds = value;

        formik.setFormikState(formikState);
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values],
  );

  /**
   * Create custom bath field remove handler
   * @param bathroomIdx {number}
   * @param index {number}
   * @param deletedItem {object}
   * @returns {(function(): void)|*}
   */
  const handleRemoveCustomBathCreator = useCallback(
    ({ bathroomIdx, index, deletedItem }) =>
      () => {
        const { customBaths } = formik.values.bathrooms[bathroomIdx];
        const formikState = {
          ...formik,
          values: {
            ...formik.values,
          },
        };

        const value = [...customBaths];
        value.splice(index, 1);

        // save deleted item id
        if (isPresent(deletedItem.id)) {
          formikState.values.bathrooms[bathroomIdx].bathsForDeleting.push({
            id: deletedItem.id,
            delete: true,
          });
        }

        formikState.values.bathrooms[bathroomIdx].customBaths = value;

        formik.setFormikState(formikState);
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik.values],
  );

  /**
   * Create bed amount change handler
   * @param fieldName {string}
   * @returns {(function(value: number, {type: string}))|*}
   */
  const onBedAmountChangeHandlerCreator = useCallback(
    (fieldName) =>
      (value, { type }) => {
        if (type === DIRECTION.DOWN) {
          return;
        }

        if (totalBedsAmount >= formik.values.bedsAmount) {
          dispatch(
            showMessage({
              messageType: MESSAGE_TYPE.ERROR,
              description: { id: 'validations.numberOfBedsDoesNotMatch' },
            }),
          );

          formik.setFieldValue(fieldName, value - 1);
        }
      },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formik, totalBedsAmount],
  );

  /**
   * On component mount handler
   */
  const onMountHandler = () => {
    disableHtmlElementsByClassName(ANTD_CLASSNAME.INPUT_NUMBER);
  };

  /**
   * Lifecycle
   */
  useMount(onMountHandler);

  return {
    formik,
    showSkeleton,
    stepStatus,
    totalBedsAmount,
    isLoading,
    onBackRoute,
    onListingBedroomsChange,
    handleAddCustomBedCreator,
    handleRemoveCustomBedCreator,
    onBedAmountChangeHandlerCreator,
    onListingBathroomsChange,
    handleAddCustomBathCreator,
    handleRemoveCustomBathCreator,
    onMountHandler,
    makeBedroomHelper,
    makeBathroomHelper,
  };
}

export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;
  const isListingIdPresent = isPresent(listingId);
  const isServer = Boolean(ctx.req);
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  if (isListingIdPresent) {
    ctx.store.dispatch(fetchListing(listingId));
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkListingCompleteness(ctx);
    });
  }

  // fetch after check listing completeness
  if (isListingIdPresent) {
    ctx.store.dispatch(fetchListingAccomodation(listingId));
  }
};

export default useContainer;
