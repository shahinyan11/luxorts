import { useField } from 'formik';

import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ name }) {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const { error, value, touched } = meta;
  const { setValue, setTouched } = helpers;

  /**
   * Handle blur
   */
  const onBlurHandler = useImmutableCallback(() => {
    setTouched(true);
  });

  /**
   * Handle phone change
   */
  const onChangeHandler = useImmutableCallback((phone) => {
    setValue(phone);
  });

  return {
    error,
    value,
    touched,
    onBlurHandler,
    onChangeHandler,
  };
}

export default useContainer;
