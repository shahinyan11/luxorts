import { mergeDeepRight } from 'ramda';
import { useEffect } from 'react';
import { useFormikContext } from 'formik';

import isPresent from 'utils/isPresent';

function useContainer() {
  const formik = useFormikContext();

  /**
   * On country change callback
   */
  const onCountryChange = () => {
    if (isPresent(formik.values.country) && isPresent(formik.values.state) && formik.dirty) {
      const formikState = mergeDeepRight(formik, {
        values: {
          state: null,
        },
        touched: {
          state: false,
        },
      });

      formik.setFormikState(formikState);
    }
  };

  /**
   * Lifecycle
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onCountryChange, [formik.values.country]);

  return {
    formik,
    onCountryChange,
  };
}
export default useContainer;
