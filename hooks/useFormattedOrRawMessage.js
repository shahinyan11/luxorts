import { useIntl } from 'react-intl';
import { is } from 'ramda';

const useFormattedOrRawMessage = () => {
  const intl = useIntl();

  return (message) => (is(Object, message) ? intl.formatMessage(message, message.values) : message);
};

export default useFormattedOrRawMessage;
