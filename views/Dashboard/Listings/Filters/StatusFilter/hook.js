import { useCallback } from 'react';
import { pick } from 'ramda';
import { useFormik } from 'formik';

import { LISTING_FILTER_KEY, LISTING_FILTERS } from 'constants/listing/manageListings';

import useImmutableCallback from 'hooks/useImmutableCallback';
import useAntdDropdownVisible from 'hooks/useAntdDropdownVisible';

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
  });

  /**
   * Handle apply button click
   * @type {(function(): void)|*}
   */
  const onApply = useCallback(() => {
    onFilter(formik.values);
    setVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  /**
   * Handle clear button click
   */
  const onClear = useImmutableCallback(() => {
    onFilter(pick([LISTING_FILTER_KEY.STATUS_IN], LISTING_FILTERS));
    formik.resetForm();
  });

  return {
    visible,
    formik,
    onVisibilityChangeHandler,
    onApply,
    onClear,
    setVisible,
  };
}

export default useContainer;
