import { useField } from 'formik';

import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ name }) {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const { setValue, setTouched } = helpers;

  /**
   * Handle blur
   */
  const onBlurHandler = useImmutableCallback(() => {
    setTouched(true);
  });

  /**
   * Handle date change
   */
  const onChangeHandler = useImmutableCallback((_, dateString) => {
    setValue(dateString);
  });

  return {
    error,
    touched,
    onChangeHandler,
    onBlurHandler,
  };
}

export default useContainer;
