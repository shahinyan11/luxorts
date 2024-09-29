import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';

import showErrorNotifications from '../showErrorNotifications';

describe('showErrorNotifications helper', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not dispatch actions', () => {
    const error = new Error();

    showErrorNotifications({ error, dispatch });

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('should call with status text', () => {
    const error = {
      response: {
        status: 404,
        statusText: 'Not found',
      },
    };

    showErrorNotifications({ error, dispatch, displayStatus: true });

    expect(dispatch).toHaveBeenCalledWith(
      showMessage({
        description: `${error.response.status} - ${error.response.statusText}`,
        messageType: MESSAGE_TYPE.ERROR,
      }),
    );
  });

  it('should call with status code only', () => {
    const error = {
      response: {
        status: 404,
        statusText: 'Not found',
        data: {
          errors: [{ detail: null }],
        },
      },
    };

    showErrorNotifications({ error, dispatch, displayStatus: true });

    expect(dispatch).toHaveBeenCalledWith(
      showMessage({
        description: error.response.status,
        messageType: MESSAGE_TYPE.ERROR,
      }),
    );
  });

  it('should call without status code', () => {
    const error = {
      response: {
        status: 404,
        statusText: 'Not found',
        data: {
          errors: [{ detail: 'error1' }],
        },
      },
    };

    showErrorNotifications({ error, dispatch });

    expect(dispatch).toHaveBeenCalledWith(
      showMessage({
        description: error.response.data.errors[0].detail,
        messageType: MESSAGE_TYPE.ERROR,
      }),
    );
  });

  it('should call with errors', () => {
    const error = {
      response: {
        status: 404,
        statusText: 'Not found',
        data: {
          errors: [{ detail: 'error1' }, { detail: 'error2' }],
        },
      },
    };

    showErrorNotifications({ error, dispatch, displayStatus: true });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      showMessage({
        description: `${error.response.status} - ${error.response.data.errors[0].detail}`,
        messageType: MESSAGE_TYPE.ERROR,
      }),
    );
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      showMessage({
        description: `${error.response.status} - ${error.response.data.errors[1].detail}`,
        messageType: MESSAGE_TYPE.ERROR,
      }),
    );
  });
});
