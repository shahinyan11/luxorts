import normalize from 'json-api-normalizer';

import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { resendUserEmailVerificationEndpoint } from 'state/concepts/session/endpoints';
import { showMessage } from 'state/flash-messages/actions';
import response from 'state/concepts/session/__mocks__/resendUserEmailVerificationResponse';

import resendUserEmailVerification from '../resendUserEmailVerification';

jest.mock('utils/showErrorNotifications');

describe('resendUserEmailVerification operation', () => {
  let dispatch;

  const { endpoint, url } = resendUserEmailVerificationEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    resendUserEmailVerification.process({ httpClient }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(resendUserEmailVerification).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'put', response });

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.put).toHaveBeenCalledWith(url);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        dataApiSuccess({
          endpoint,
          response: normalize(response.data),
        }),
      );
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        showMessage({
          description: { id: 'shared.emailHasBeenResent' },
        }),
      );
    });
  });

  describe('failure', () => {
    const error = new Error('test');

    const httpClient = mockHttpClient({
      method: 'put',
      reject: true,
      response: error,
    });

    beforeEach(beforeFunction(httpClient));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });

    it('sets errors', () => {
      expect(showErrorNotifications).toHaveBeenCalledWith({ error, dispatch });
    });
  });
});
