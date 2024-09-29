import { useCallback, useMemo, useState } from 'react';
import { pick } from 'ramda';
import { useFormik } from 'formik';

import { LISTING_FILTER_KEY, LISTING_FILTERS } from 'constants/listing/manageListings';

import useImmutableCallback from 'hooks/useImmutableCallback';
import useAntdDropdownVisible from 'hooks/useAntdDropdownVisible';

function useContainer({ amenities, filters, onFilter }) {
  const [visible, onVisibilityChangeHandler, setVisible] = useAntdDropdownVisible();
  const [search, setSearch] = useState('');

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
   * Calculate amenity items
   */
  const items = useMemo(
    () =>
      amenities
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .map((item) => ({
          label: item.name,
          value: item.id,
        })),
    [amenities, search],
  );

  /**
   * On search query change handler
   */
  const onSearchChangeHandler = useImmutableCallback((event) => {
    setSearch(event.target.value);
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
    onFilter(pick([LISTING_FILTER_KEY.AMENITIES_IN], LISTING_FILTERS));
    formik.resetForm();
  });

  return {
    visible,
    formik,
    items,
    search,
    onVisibilityChangeHandler,
    onSearchChangeHandler,
    onApply,
    onClear,
    setVisible,
  };
}

export default useContainer;
