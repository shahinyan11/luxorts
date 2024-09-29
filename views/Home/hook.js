import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchHomePageData,
  fetchPopularApartments,
  setApartmentsPage,
} from 'state/concepts/publicInfo/actions';
import {
  popularApartmentsLastPageSelector,
  popularApartmentsSelfPageSelector,
  propertyTypesSelector,
  trendingLocationsSelector,
} from 'state/concepts/publicInfo/selectors';
import { listingsSelector } from 'state/concepts/listings/selectors';

function useContainer() {
  const dispatch = useDispatch();
  const trendingLocations = useSelector(trendingLocationsSelector);
  const propertyTypes = useSelector(propertyTypesSelector);
  const popularApartments = useSelector(listingsSelector);
  const popularApartmentsLastPage = useSelector(popularApartmentsLastPageSelector);
  const popularApartmentsSelfPage = useSelector(popularApartmentsSelfPageSelector);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      location: '',
      date: '',
    },
  });

  /**
   * Handle change to next page
   */
  const handleNext = () => {
    dispatch(setApartmentsPage(popularApartmentsSelfPage + 1));
    dispatch(fetchPopularApartments());
  };

  /**
   * Handle change to next page
   */
  const handlePrev = () => {
    dispatch(setApartmentsPage(popularApartmentsSelfPage - 1));
    dispatch(fetchPopularApartments());
  };

  return {
    formik,
    propertyTypes,
    trendingLocations,
    popularApartments,
    popularApartmentsLastPage,
    popularApartmentsSelfPage,
    handleNext,
    handlePrev,
  };
}

export const getInitialProps = async (ctx) => {
  ctx.store.dispatch(fetchHomePageData());
};

export default useContainer;
