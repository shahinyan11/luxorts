import { useField } from 'formik';

import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ name }) {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  /**
   * Handle change
   */
  const onValueChangeHandler = useImmutableCallback((value) => {
    setValue(value || null);
  });

  return {
    meta,
    field,
    onValueChangeHandler,
  };
}

export default useContainer;
