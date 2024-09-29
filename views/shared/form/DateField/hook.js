import { useField } from 'formik';
import moment from 'moment';

import { DATE_FORMAT } from 'constants';

import useImmutableCallback from 'hooks/useImmutableCallback';

function useContainer({ name }) {
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const { setValue, setTouched } = helpers;
  const date = field.value && moment(field.value, DATE_FORMAT);

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
    date,
    error,
    touched,
    onChangeHandler,
    onBlurHandler,
  };
}

export default useContainer;
