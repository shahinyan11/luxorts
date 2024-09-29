import endpoint from 'utils/endpoint';
import {
  userAccountActivationRoute,
  userAccountDeactivationRoute,
  userAccountForgotPasswordCodeRoute,
  userAccountForgotPasswordResendRoute,
  userAccountForgotPasswordRoute,
  userChangePasswordRoute,
  userInvitationsRoute,
  userRegistrationRoute,
  userResendInviteRoute,
  userResendUpdateEmailRoute,
  userResendUpdatePhoneRoute,
  userSessionRoute,
  userUpdateAvatarRoute,
  userUpdateEmailRoute,
  userUpdatePhoneRoute,
  userUpdateProfileRoute,
  userVerificationEmailRoute,
  userVerificationPhoneRoute,
} from 'lib/apiRoutes';

import * as types from './types';

export const createUserEndpoint = endpoint(types.USER_SIGN_UP, 'POST', userRegistrationRoute);

export const verifyUserEmailEndpoint = endpoint(
  types.VERIFY_USER_EMAIL,
  'POST',
  userVerificationEmailRoute,
);

export const verifyUserPhoneEndpoint = endpoint(
  types.VERIFY_USER_PHONE,
  'POST',
  userVerificationPhoneRoute,
);

export const resendUserEmailVerificationEndpoint = endpoint(
  types.RESEND_USER_EMAIL_VERIFICATION,
  'PUT',
  userVerificationEmailRoute,
);

export const signInUserEndpoint = endpoint(types.USER_SIGN_IN, 'POST', userSessionRoute);

export const userAccountActivationEndpoint = endpoint(
  types.USER_SIGN_IN,
  'POST',
  userAccountActivationRoute,
);

export const signOutUserEndpoint = endpoint(types.USER_SIGN_OUT, 'DELETE', userSessionRoute);

export const userSendForgotPasswordEmailEndpoint = endpoint(
  types.USER_SEND_FORGOT_PASSWORD_EMAIL,
  'POST',
  userAccountForgotPasswordRoute,
);

export const userValidateForgotPasswordCodeEndpoint = endpoint(
  types.USER_VALIDATE_FORGOT_PASSWORD_CODE,
  'POST',
  userAccountForgotPasswordCodeRoute,
);

export const userResendForgotPasswordEmailEndpoint = endpoint(
  types.USER_RESEND_FORGOT_PASSWORD_EMAIL,
  'POST',
  userAccountForgotPasswordResendRoute,
);

export const userUpdatePasswordEndpoint = endpoint(
  types.USER_UPDATE_PASSWORD,
  'PUT',
  userAccountForgotPasswordRoute,
);

export const userUpdateAvatarEndpoint = endpoint(
  types.USER_UPDATE_AVATAR,
  'PUT',
  userUpdateAvatarRoute,
);

export const userRemoveAvatarEndpoint = endpoint(
  types.USER_REMOVE_AVATAR,
  'DELETE',
  userUpdateAvatarRoute,
);

export const userUpdateProfileEndpoint = endpoint(
  types.USER_UPDATE_PROFILE,
  'PUT',
  userUpdateProfileRoute,
);

export const userAccountDeactivationEndpoint = endpoint(
  types.USER_DEACTIVATE_ACCOUNT,
  'POST',
  userAccountDeactivationRoute,
);

export const userChangePasswordEndpoint = endpoint(
  types.USER_CHANGE_PASSWORD,
  'PUT',
  userChangePasswordRoute,
);

export const userInviteFriendsEndpoint = endpoint(
  types.USER_INVITE_FRIENDS,
  'POST',
  userInvitationsRoute,
);

export const fetchUserInvitationEndpoint = endpoint(
  types.FETCH_USER_INVITATION,
  'GET',
  userInvitationsRoute,
);

export const userResendInviteEndpoint = (invitationId) =>
  endpoint(types.USER_RESEND_INVITE, 'PUT', userResendInviteRoute(invitationId));

export const userSendUpdatePhoneEndpoint = endpoint(
  types.USER_SEND_UPDATE_PHONE,
  'POST',
  userUpdatePhoneRoute,
);

export const userResendUpdatePhoneEndpoint = endpoint(
  types.USER_RESEND_UPDATE_PHONE,
  'POST',
  userResendUpdatePhoneRoute,
);

export const userUpdatePhoneEndpoint = endpoint(
  types.USER_UPDATE_PHONE,
  'PUT',
  userUpdatePhoneRoute,
);

export const userSendUpdateEmailEndpoint = endpoint(
  types.USER_SEND_UPDATE_EMAIL,
  'POST',
  userUpdateEmailRoute,
);

export const userResendUpdateEmailEndpoint = endpoint(
  types.USER_RESEND_UPDATE_EMAIL,
  'POST',
  userResendUpdateEmailRoute,
);

export const userUpdateEmailEndpoint = endpoint(
  types.USER_UPDATE_EMAIL,
  'PUT',
  userUpdateEmailRoute,
);
