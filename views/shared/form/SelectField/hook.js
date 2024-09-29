import { useField } from 'formik';

import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ name }) {
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;

  /**
   * Handle blur
   */
  const onBlurHandler = useImmutableCallback(() => {
    setTouched(true);
  });

  /**
   * Handle select
   */
  const onChangeHandler = useImmutableCallback((value) => {
    setValue(value);
  });

  return {
    field,
    meta,
    onChangeHandler,
    onBlurHandler,
  };
}

export default useContainer;
