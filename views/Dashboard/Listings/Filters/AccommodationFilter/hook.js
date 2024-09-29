import { useCallback, useMemo } from 'react';
import { pick } from 'ramda';
import { useFormik } from 'formik';

import {
  ACCOMMODATION_LISTING_FILTER_KEYS,
  LISTING_FILTERS,
} from 'constants/listing/manageListings';

import useImmutableCallback from 'hooks/useImmutableCallback';
import useAntdDropdownVisible from 'hooks/useAntdDropdownVisible';

import validationSchema from 'lib/yupLocalised/scheme/manageListings/accommodationFilter';

function useContainer({ filters, onFilter }) {
  const [visible, onVisibilityChangeHandler, setVisible] = useAntdDropdownVisible();

  /**
   * Formik initialization
   */
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...filters,
    },
    validationSchema,
  });

  /**
   * Applied filters count
   * @type {number}
   */
  const appliedFilters = useMemo(() => {
    let count = 0;

    Object.values(filters).forEach((value) => {
      if (value) {
        count += 1;
      }
    });

    return count;
  }, [filters]);

  /**
   * Is clear button visible
   * @type {boolean}
   */
  const clearButtonVisible = useMemo(() => {
    let count = 0;

    Object.values(formik.values).forEach((value) => {
      if (value) {
        count += 1;
      }
    });

    return count > 0;
  }, [formik.values]);

  /**
   * Handle apply button click
   * @type {(function(): void)|*}
   */
  const onApply = useCallback(() => {
    if (!formik.isValid) {
      return;
    }

    onFilter(formik.values);
    setVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.isValid, formik.values]);

  /**
   * Handle clear button click
   */
  const onClear = useImmutableCallback(() => {
    onFilter(pick(ACCOMMODATION_LISTING_FILTER_KEYS, LISTING_FILTERS));
    formik.resetForm();
  });

  return {
    visible,
    clearButtonVisible,
    formik,
    appliedFilters,
    onVisibilityChangeHandler,
    onApply,
    onClear,
    setVisible,
  };
}

export default useContainer;
