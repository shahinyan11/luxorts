import { useSelector } from 'react-redux';
import { prop } from 'ramda';

function useContainer() {
  const messages = useSelector(prop('flash-messages'));

  return {
    messages,
  };
}

export default useContainer;
