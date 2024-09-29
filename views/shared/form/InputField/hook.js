import { useField } from 'formik';
import { all } from 'ramda';

import useImmutableCallback from 'hooks/useImmutableCallback';

// Tab, Backspace, Delete, Left, Right
const ALLOWED_KEY_CODES = [9, 8, 46, 37, 39];
const SPACE_CODE = 32;

function useContainer({ name, numbersOnly }) {
  const [field, meta] = useField(name);

  /**
   * Handle input key down event
   */
  const onKeyDown = useImmutableCallback((event) => {
    // workaround for https://stackoverflow.com/q/31706611
    const isNotAllowed = all((code) => event.keyCode !== code)(ALLOWED_KEY_CODES);

    if (
      (numbersOnly && isNotAllowed && Number.isNaN(Number(event.key))) ||
      (numbersOnly && event.keyCode === SPACE_CODE)
    ) {
      event.preventDefault();
    }
  });

  return {
    field,
    meta,
    onKeyDown,
  };
}

export default useContainer;
