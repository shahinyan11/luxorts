import { pathOr, isNil } from 'ramda';

import isPresent from 'utils/isPresent';
import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';

const showErrorNotifications = ({ error, dispatch, displayStatus = false }) => {
  if (typeof window !== 'undefined') {
    const errors = pathOr(null, ['response', 'data', 'errors'], error);
    const status = pathOr(null, ['response', 'status'], error);
    const statusText = pathOr(null, ['response', 'statusText'], error);

    if (!status) {
      return;
    }

    const apiErrors = isNil(errors)
      ? [statusText]
      : errors.map((e) => e?.detail).filter((value, index, self) => self.indexOf(value) === index); // Unique

    apiErrors.forEach((currentError) => {
      let description = currentError;

      if (displayStatus && !isPresent(currentError)) {
        description = status;
      }

      if (displayStatus && isPresent(currentError)) {
        description = `${status} - ${currentError}`;
      }

      dispatch(
        showMessage({
          description,
          messageType: MESSAGE_TYPE.ERROR,
        }),
      );
    });
  }
};

export default showErrorNotifications;
