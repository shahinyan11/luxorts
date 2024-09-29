// Users
export const userAccountRoute = '/current_user';

// Session
export const userRegistrationRoute = '/user_account/registration';
export const userVerificationEmailRoute = '/user_account/verification/email';
export const userVerificationPhoneRoute = '/user_account/verification/phone';
export const userSessionRoute = '/user_account/session';
export const userAccountActivationRoute = '/user_account/status/activation';
export const userAccountForgotPasswordRoute = '/user_account/forgot_password';
export const userAccountForgotPasswordCodeRoute = '/user_account/forgot_password/code';
export const userAccountForgotPasswordResendRoute = '/user_account/forgot_password/resend';
export const userUpdateAvatarRoute = '/user_account/user_profile/avatar';
export const userUpdateProfileRoute = '/user_account/user_profile';
export const userAccountDeactivationRoute = '/user_account/status/deactivation';
export const userChangePasswordRoute = '/user_account/password';
export const userInvitationsRoute = '/user_account/user_invitations';
export const userResendInviteRoute = (id) => `/user_account/user_invitations/${id}`;
export const userUpdatePhoneRoute = '/user_account/phone';
export const userResendUpdatePhoneRoute = '/user_account/phone/resend';
export const userUpdateEmailRoute = '/user_account/email';
export const userResendUpdateEmailRoute = '/user_account/email/resend';

// Listings
export const listingsRoute = '/listings';
export const listingRoute = (id) => `/listings/${id}`;
export const listingPropertyTypeRoute = (id) => `/listings/${id}/property_type`;
export const listingsBasePropertyTypesRoute = '/listings/base/property_types';
export const listingAccomodationRoute = (id) => `/listings/${id}/listing_accomodation`;
export const listingLocationRoute = (id) => `/listings/${id}/listing_location`;
export const listingBaseAmenitiesRoute = '/listings/base/amenities';
export const listingAmenitiesRoute = (id) => `/listings/${id}/amenities`;
export const listingBaseCapabilitiesRoute = '/listings/base/capabilities';
export const listingCapabilitiesRoute = (id) => `/listings/${id}/capabilities`;
export const listingBaseServicesRoute = '/listings/base/services';
export const listingServicesRoute = (id) => `/listings/${id}/services`;
export const listingPhotosRoute = (id) => `/listings/${id}/listing_photos`;
export const listingDescriptionRoute = (id) => `/listings/${id}/listing_description`;
export const listingBaseHouseRulesRoute = '/listings/base/house_rules';
export const listingHouseRulesRoute = (id) => `/listings/${id}/house_rules`;
export const listingReservationPreferenceRoute = (id) => `/listings/${id}/reservation_preference`;
export const listingTimePeriodsRoute = (id) => `/listings/${id}/time_periods`;
export const listingPricingRoute = (id) => `/listings/${id}/pricing`;
export const listingStatusRoute = (id) => `/listings/${id}/status`;
export const listingAvailabilityRoute = (id) => `/listings/${id}/availability`;

// Google maps
export const geocodingRoute = 'https://maps.googleapis.com/maps/api/geocode/json';

// ---publicInfo---
export const homePopularApartmentsRoute = '/public/home/popular_apartments';
export const homePropertyTypesRoute = '/public/home/property_types';
export const homeTrendingLocationsRoute = '/public/home/trending_locations';
export const aboutUsRoute = '/public/static/about_us';
export const termsRoute = '/public/static/terms_of_service';
export const contactUsRequestRoute = '/public/static/contact_us_request';
export const privacyPolicyRoute = '/public/static/privacy_policy';
