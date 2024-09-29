import { useCallback } from 'react';
import { useField } from 'formik';

function useContainer({ name, onChange }) {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  /**
   * Handle number change
   */
  const onChangeHandler = useCallback(
    (value) => {
      if (onChange) {
        onChange(value);
      }

      setValue(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange],
  );

  return {
    field,
    meta,
    onChangeHandler,
  };
}

export default useContainer;
