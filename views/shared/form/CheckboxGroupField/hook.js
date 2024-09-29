import { useField } from 'formik';

import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ name }) {
  // eslint-disable-next-line no-unused-vars
  const [field, _, helpers] = useField(name);
  const { setValue } = helpers;

  /**
   * Handle change
   */
  const onChangeHandler = useImmutableCallback((value) => {
    setValue(value);
  });

  return {
    field,
    onChangeHandler,
  };
}

export default useContainer;
