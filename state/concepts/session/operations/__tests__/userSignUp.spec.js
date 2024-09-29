import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { omit, pick } from 'ramda';

import setCookieIsomorphic from 'utils/setCookieIsomorphic';
import mockHttpClient from 'utils/testHelpers/mockHttpClient';
import formatJsonApiErrors from 'utils/formatJsonApiErrors';
import redirect from 'utils/redirect';

import { userSignInSuccess } from 'state/concepts/session/actions';
import { dataApiRequest, dataApiSuccess, dataApiFailure } from 'state/data/actions';
import { createUserEndpoint } from 'state/concepts/session/endpoints';

import {
  loginSuccessResponse,
  loginErrorResponse,
} from 'state/concepts/session/__mocks__/loginResponse';
import userSignUp from '../userSignUp';

jest.mock('utils/setCookieIsomorphic');
jest.mock('utils/redirect');

describe('userSignUp', () => {
  let dispatch;

  const action = {
    values: {
      email: 'email',
      password: 'password',
      invitationID: 'invitationID',
      redirectRoute: 'redirectRoute',
      userProfile: {
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNumber: 'phoneNumber',
        dateOfBirth: 'dateOfBirth',
      },
    },
    form: {
      setErrors: jest.fn(),
      setStatus: jest.fn(),
    },
  };

  const body = {
    email: action.values.email,
    password: action.values.password,
    invitation_id: action.values.invitationID,
    user_profile: {
      first_name: action.values.userProfile.firstName,
      last_name: action.values.userProfile.lastName,
      phone_number: action.values.userProfile.phoneNumber,
      date_of_birth: action.values.userProfile.dateOfBirth,
    },
  };

  const { endpoint, url } = createUserEndpoint;

  const beforeFunction = (httpClient) => () => {
    jest.clearAllMocks();
    dispatch = jest.fn();
    userSignUp.process({ httpClient, action }, dispatch, jest.fn());
  };

  it('matches snapshot', () => {
    expect(userSignUp).toMatchSnapshot();
  });

  describe('success', () => {
    const httpClient = mockHttpClient({ method: 'post', response: loginSuccessResponse });

    httpClient.defaults = { headers: { common: {} } };

    const response = normalize(loginSuccessResponse.data);

    const currentUser = build(response, 'travellerAccount', loginSuccessResponse.data.data.id);

    beforeEach(beforeFunction(httpClient));

    it('calls right endpoint with right params', () => {
      expect(httpClient.post).toHaveBeenCalledWith(url, body);
    });

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, userSignInSuccess(currentUser));
      expect(dispatch).toHaveBeenNthCalledWith(
        3,
        dataApiSuccess({
          endpoint,
          response,
        }),
      );
    });

    it('sets tokens', () => {
      const tokens = loginSuccessResponse.data.meta;

      expect(setCookieIsomorphic).toHaveBeenCalledTimes(2);

      expect(setCookieIsomorphic).toHaveBeenNthCalledWith(
        1,
        null,
        'currentUser',
        JSON.stringify(currentUser),
      );
      expect(setCookieIsomorphic).toHaveBeenNthCalledWith(
        2,
        null,
        'tokens',
        JSON.stringify(tokens),
      );
      expect(httpClient.defaults.headers.common.Authorization).toBe(`Bearer ${tokens.access}`);
    });

    it('redirects', () => {
      expect(redirect).toHaveBeenCalledWith(action.values.redirectRoute);
    });
  });

  describe('failure', () => {
    const httpClient = mockHttpClient({
      method: 'post',
      response: loginErrorResponse,
      reject: true,
    });

    beforeEach(beforeFunction(httpClient));

    it('dispatches actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, dataApiRequest({ endpoint }));
      expect(dispatch).toHaveBeenNthCalledWith(2, dataApiFailure({ endpoint }));
    });

    it('sets errors', () => {
      const formattedErrors = formatJsonApiErrors(loginErrorResponse.response.data.errors);

      expect(action.form.setStatus).toHaveBeenCalledWith(pick(['base'], formattedErrors));
      expect(action.form.setErrors).toHaveBeenCalledWith(omit(['base'], formattedErrors));
    });
  });
});
