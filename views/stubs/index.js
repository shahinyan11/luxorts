import React from 'react';

// eslint-disable-next-line react/prop-types
const Link = ({ url, txt }) => (
  <li>
    <a rel="noopener noreferrer" href={`/stubs${url}`}>
      {txt}
    </a>
  </li>
);

const card = {
  marginBottom: '20px',
  marginTop: '20px',
};

export default () => (
  <div className="container" style={{ padding: '16px 24px' }}>
    <h1>Stubs Luxorts</h1>
    <div style={card}>
      <h2>Sign Up</h2>
      <ul>
        <Link txt="Sign Up" url="/auth/signUp" />
        <Link txt="Sign Up Error" url="/auth/signUpError" />
        <Link txt="Sign Up Weak Password" url="/auth/signUpWeakPassword" />
        <Link txt="Sign Up Medium Password" url="/auth/signUpMediumPassword" />
        <Link txt="Sign Up Strong Password" url="/auth/signUpStrongPassword" />
        <Link txt="Sign Up Field Error" url="/auth/signUpFieldError" />
      </ul>
    </div>
    <div style={card}>
      <h2>Confirmation</h2>
      <ul>
        <Link txt="Confirm Email" url="/confirmation/confirmEmail" />
        <Link txt="Confirm Email Popup" url="/confirmation/confirmEmailPopup" />
        <Link txt="Recover Password Popup" url="/confirmation/recoveryPasswordPopup" />
      </ul>
    </div>
    <div style={card}>
      <h2>Login</h2>
      <ul>
        <Link txt="Login" url="/login/login" />
        <Link txt="Login Error" url="/login/loginError" />
        <Link txt="Login Field Error" url="/login/loginFieldError" />
      </ul>
    </div>
    <div style={card}>
      <h2>Password recovery</h2>
      <ul>
        <Link txt="Password Recovery" url="/password_recovery/email" />
        <Link txt="Security Code" url="/password_recovery/securityCode" />
        <Link txt="New Password" url="/password_recovery/newPassword" />
        <Link txt="New Password Weak" url="/password_recovery/newPasswordWeak" />
        <Link txt="New Password Medium" url="/password_recovery/newPasswordMedium" />
        <Link txt="New Password Strong" url="/password_recovery/newPasswordStrong" />
        <Link txt="Welcome Back" url="/password_recovery/welcomeBack" />
      </ul>
    </div>
    <div style={card}>
      <h2>Account Settings</h2>
      <ul>
        <Link txt="Account Settings" url="/account_settings/accountSettings" />
        <Link
          txt="Account Settings With Uploaded Photo"
          url="/account_settings/accountSettingsWithPhoto"
        />
        <Link txt="Upload Profile Image (popup)" url="/account_settings/uploadPhoto" />
        <Link
          txt="Upload Profile Image Required (popup)"
          url="/account_settings/uploadPhotoRequired"
        />
        <Link
          txt="Upload Profile Image Size Error (popup)"
          url="/account_settings/uploadPhotoErrorSize"
        />
        <Link txt="Remove Profile Image (popup)" url="/account_settings/removeProfileImage" />
        <Link txt="Crop Profile Image (popup)" url="/account_settings/cropProfileImage" />
      </ul>
    </div>
    <div style={card}>
      <h2>Personal information</h2>
      <ul>
        <Link txt="Personal information" url="/personal_information/personalInformation" />
        <Link
          txt="Personal information Edit Full Name"
          url="/personal_information/personalInformationEditFullName"
        />
        <Link
          txt="Personal information Edit Full Name Filled"
          url="/personal_information/personalInformationEditFullNameFilled"
        />
        <Link
          txt="Personal information Edit Full Name Filled Succes Message"
          url="/personal_information/personalInformationEditFullNameFilledSuccess"
        />
        <Link
          txt="Personal Information Gender"
          url="/personal_information/personalInformationGender"
        />
        <Link
          txt="Personal Information Birth Date"
          url="/personal_information/personalInformationBirth"
        />
        <Link
          txt="Personal Information About"
          url="/personal_information/personalInformationAbout"
        />
        <Link
          txt="Personal Information Email"
          url="/personal_information/personalInformationEmail"
        />
        <Link
          txt="Personal Information Phone"
          url="/personal_information/personalInformationPhone"
        />
        <Link
          txt="Personal Information Phone Confirm"
          url="/personal_information/personalInformationPhoneConfirm"
        />
        <Link
          txt="Personal Information Address"
          url="/personal_information/personalInformationAddress"
        />
        <Link
          txt="Personal Information License"
          url="/personal_information/personalInformationLicense"
        />
        <Link
          txt="Personal Information Deactivate Account (popup)"
          url="/personal_information/personalInformationDeactivateAccount"
        />
      </ul>
    </div>
    <div style={card}>
      <h2>Login And Security</h2>
      <ul>
        <Link txt="Login And Security" url="/login_and_security/loginAndSecurity" />
        <Link
          txt="Login And Security Password Update"
          url="/login_and_security/loginAndSecurityPasswordUpdate"
        />
        <Link
          txt="Login And Security Password Strong"
          url="/login_and_security/loginAndSecurityPasswordStrong"
        />
        <Link
          txt="Login And Security New Password"
          url="/login_and_security/loginAndSecurityNewPassword"
        />
        <Link
          txt="Login And Security New Password Strong"
          url="/login_and_security/loginAndSecurityNewPasswordStrong"
        />
      </ul>
    </div>
    <div style={card}>
      <h2>Invite Friends</h2>
      <ul>
        <Link txt="Invite Friends" url="/invite_friends/inviteFriends" />
        <Link txt="Invite Friends Filled" url="/invite_friends/inviteFriendsFilled" />
        <Link txt="Invite Friends Sent" url="/invite_friends/inviteFriendsSent" />
      </ul>
    </div>
    <div style={card}>
      <h2>Payments & Payouts</h2>
      <ul>
        <Link txt="Payments & Payouts" url="/payments_and_payouts/paymentsAndPayouts" />
        <Link
          txt="Payments & Payouts Add Card (popup)"
          url="/payments_and_payouts/paymentsAndPayoutsAddCard"
        />
        <Link
          txt="Payments & Payouts Add Card Filled (popup)"
          url="/payments_and_payouts/paymentsAndPayoutsAddCardFilled"
        />
        <Link txt="Payments & Payouts Cards" url="/payments_and_payouts/paymentsAndPayoutsCards" />
        <Link
          txt="Payments & Payouts Remove Payment Method (popup)"
          url="/payments_and_payouts/paymentsAndPayoutsMethodRemove"
        />
        <Link
          txt="Payments & Payouts History Empty"
          url="/payments_and_payouts/paymentsAndPayoutsHistoryEmpty"
        />
        <Link
          txt="Payments & Payouts History No Results"
          url="/payments_and_payouts/paymentsAndPayoutsHistoryNoResults"
        />
      </ul>
    </div>
    <div style={card}>
      <h2>Landings</h2>
      <ul>
        <Link txt="Home Page" url="/landings/homePage" />
        <Link txt="Terms of Service" url="/landings/termsOfService" />
        <Link txt="Privacy Policy" url="/landings/privacyPolicy" />
        <Link txt="Contact Us" url="/landings/contactUs" />
        <Link txt="About Us" url="/landings/aboutUs" />
        <Link txt="FAQ" url="/landings/faq" />
        <Link txt="FAQ Answer" url="/landings/faqAnswer" />
      </ul>
    </div>
    <div style={card}>
      <h2>Listing</h2>
      <h3>Add new listing</h3>
      <ul>
        <Link txt="Property Type" url="/listing/new/propertyType" />
        <Link txt="Accommodation" url="/listing/new/accommodation" />
        <Link txt="Accommodation Selected" url="/listing/new/accommodationSelected" />
        <Link txt="Accommodation Add Beds" url="/listing/new/accommodationAddBeds" />
        <Link
          txt="Accommodation Add Beds Selected"
          url="/listing/new/accommodationAddBedsSelected"
        />
        <Link
          txt="Accommodation Add Beds Add Another Bed"
          url="/listing/new/accommodationAddBedsAddAnotherBed"
        />
        <Link
          txt="Accommodation Add Beds Add Another Bed Done"
          url="/listing/new/accommodationAddBedsAddAnotherBedDone"
        />
        <Link txt="Accommodation Add Beds Done" url="/listing/new/accommodationAddBedsDone" />
        <Link txt="Accommodation Add Bath" url="/listing/new/accommodationAddBath" />
        <Link
          txt="Accommodation Add Bath Selected"
          url="/listing/new/accommodationAddBathSelected"
        />
        <Link
          txt="Accommodation Add Bath Add Another Bed"
          url="/listing/new/accommodationAddBathAddAnotherBath"
        />
        <Link
          txt="Accommodation Add Bath Add Another Bath Done"
          url="/listing/new/accommodationAddBathAddAnotherBathDone"
        />
        <Link txt="Accommodation Add Bath Done" url="/listing/new/accommodationAddBathDone" />
        <Link txt="Location" url="/listing/new/location" />
        <Link txt="Location Filled" url="/listing/new/locationFilled" />
        <Link txt="Location Pin" url="/listing/new/locationPin" />
        <Link txt="Amenities" url="/listing/new/amenities" />
        <Link txt="Amenities Filled" url="/listing/new/amenitiesFilled" />
        <Link txt="Amenities Add Amenity" url="/listing/new/amenitiesAddAmenity" />
        <Link txt="Capabilities" url="/listing/new/capabilities" />
        <Link txt="Capabilities Filled" url="/listing/new/capabilitiesFilled" />
        <Link txt="Capabilities Add Capability" url="/listing/new/capabilitiesAddCapability" />
        <Link txt="Services" url="/listing/new/services" />
        <Link txt="Services Filled" url="/listing/new/servicesFilled" />
        <Link txt="Services Add Service" url="/listing/new/servicesAddService" />
        <Link txt="Photos" url="/listing/new/photos" />
        <Link txt="Photos Upload" url="/listing/new/photosUpload" />
        <Link txt="Description" url="/listing/new/description" />
        <Link txt="Description Filled" url="/listing/new/descriptionFilled" />
        <Link txt="House Rules" url="/listing/new/houseRules" />
        <Link txt="House Rules Filled" url="/listing/new/houseRulesFilled" />
        <Link txt="House Rules Add Rule" url="/listing/new/houseRulesAddRule" />
        <Link txt="Reservation Preferences" url="/listing/new/reservationPreferences" />
        <Link
          txt="Reservation Preferences Filled"
          url="/listing/new/reservationPreferencesFilled"
        />
        <Link txt="Availability" url="/listing/new/availability" />
        <Link txt="Availability Days Blocked" url="/listing/new/availabilityDaysBlocked" />
        <Link txt="Pricing & Discounts" url="/listing/new/pricingAndDiscounts" />
        <Link txt="Pricing & Discounts Filled" url="/listing/new/pricingAndDiscountsFilled" />
        <Link txt="Publish" url="/listing/new/publish" />
        <Link txt="Publish Upload (popup)" url="/listing/new/publishUpload" />
        <Link txt="Publish Upload Done (popup)" url="/listing/new/publishUploadDone" />
        <Link txt="Publish Exit (popup)" url="/listing/new/publishExit" />
      </ul>
      <h3>Manage</h3>
      <ul>
        <Link txt="No Listings" url="/listing/manage/noListings" />
        <Link txt="Listings Full Table" url="/listing/manage/listingsFullTable" />
        <Link txt="Search No Results" url="/listing/manage/searchNoResults" />
        <Link txt="Table Filters" url="/listing/manage/tableFilters" />
        <Link txt="Filter No Results" url="/listing/manage/filterNoResults" />
        <Link txt="Publish / Unpublish / Republish (popup)" url="/listing/manage/publishListing" />
        <Link txt="Remove Listing (popup)" url="/listing/manage/removeListing" />
        <Link txt="Publish Listing Done (popup)" url="/listing/manage/publishListingDone" />
        <Link txt="Contact Support (popup)" url="/listing/manage/contactSupport" />
      </ul>
      <h3>Edit</h3>
      <ul>
        <Link txt="Edit Listing" url="/listing/edit/editListing" />
        <Link txt="Changes Not Saved" url="/listing/edit/changesNotSaved" />
        <Link txt="Calendar Dates Opened" url="/listing/edit/calendarDatesOpened" />
        <Link
          txt="Calendar Availability Settings"
          url="/listing/edit/calendarAvailabilitySettings"
        />
        <Link txt="Calendar Pricing Settings" url="/listing/edit/calendarPricingSettings" />
        <Link txt="Calendar Guest" url="/listing/edit/calendarGuest" />
        <Link txt="Calendar Guest Add Note" url="/listing/edit/calendarGuestAddNote" />
        <Link txt="Calendar Guest Add Note Done" url="/listing/edit/calendarGuestAddNoteDone" />
      </ul>
    </div>
    <div style={card}>
      <h2>Calendar</h2>
      <ul>
        <Link txt="Booking Calendar" url="/calendar/bookingCalendar" />
      </ul>
    </div>
    <div style={card}>
      <h2>Public Profile</h2>
      <ul>
        <Link txt="Public Profile Traveler" url="/public_profile/publicProfileTraveler" />
        <Link txt="Public Profile Host" url="/public_profile/publicProfileHost" />
        <Link txt="Add Response" url="/public_profile/addResponse" />
        <Link txt="Add Response Filled" url="/public_profile/addResponseFilled" />
      </ul>
    </div>
    <div style={card}>
      <h2>Expolore Listings</h2>
      <ul>
        <Link txt="Expolore Listings" url="/expolore_listings/expoloreListings" />
        <Link txt="Expolore Listings Filter" url="/expolore_listings/expoloreListingsFilter" />
        <Link
          txt="Expolore Listings Filter No Results"
          url="/expolore_listings/expoloreListingsFilterNoResults"
        />
        <Link
          txt="Expolore Listings More Filters (popup)"
          url="/expolore_listings/expoloreListingsPopup"
        />
        <Link
          txt="Expolore Listings More Filters Show More (popup)"
          url="/expolore_listings/expoloreListingsPopupExpanded"
        />
      </ul>
    </div>
    <div style={card}>
      <h2>Host Bookings</h2>
      <ul>
        <Link txt="Booking Empty" url="/host_bookings/bookingEmpty" />
        <Link txt="Booking" url="/host_bookings/booking" />
        <Link txt="Booking Search No Results" url="/host_bookings/bookingSearchNoResults" />

        <Link txt="Booking Filter No Results" url="/host_bookings/bookingFilterNoResults" />
        <Link txt="Booking Details" url="/host_bookings/bookingDetails" />
        <Link txt="Booking Details Cancelled" url="/host_bookings/bookingDetailsCancelled" />
        <Link txt="Booking Details Rejected" url="/host_bookings/bookingDetailsRejected" />
        <Link txt="Booking Accept (popup)" url="/host_bookings/bookingAccept" />
        <Link txt="Booking Reject (popup)" url="/host_bookings/bookingReject" />
        <Link txt="Booking Cancel (popup)" url="/host_bookings/bookingCancel" />
        <Link txt="Booking Cancel Reason (popup)" url="/host_bookings/bookingCancelReason" />
      </ul>
    </div>
    <div style={card}>
      <h2>Traveler Bookings</h2>
      <ul>
        <Link txt="Booking Empty" url="/traveler_bookings/bookingEmpty" />
        <Link txt="Booking" url="/traveler_bookings/booking" />
        <Link txt="Booking Search No Results" url="/traveler_bookings/bookingSearchNoResults" />
        <Link txt="Booking Filter No Results" url="/traveler_bookings/bookingFilterNoResults" />
        <Link txt="Booking Details" url="/traveler_bookings/bookingDetails" />
        <Link txt="Booking Details Cancelled" url="/traveler_bookings/bookingDetailsCancelled" />
        <Link txt="Booking Details Rejected" url="/traveler_bookings/bookingDetailsRejected" />
        <Link txt="Booking House Rules (popup)" url="/traveler_bookings/bookingHouseRules" />
        <Link
          txt="Booking Cancellation Police (popup)"
          url="/traveler_bookings/bookingCancellationPolice"
        />
        <Link txt="Booking Cancel (popup)" url="/traveler_bookings/bookingCancel" />
        <Link txt="Booking Cancel Reason (popup)" url="/traveler_bookings/bookingCancelReason" />
      </ul>
    </div>
    <div style={card}>
      <h2>Traveler Bookings</h2>
      <ul>
        <Link txt="Booking Empty" url="/traveler_bookings/bookingEmpty" />
        <Link txt="Booking" url="/traveler_bookings/booking" />
        <Link txt="Booking Search No Results" url="/traveler_bookings/bookingSearchNoResults" />
        <Link txt="Booking Filter No Results" url="/traveler_bookings/bookingFilterNoResults" />
      </ul>
    </div>
    <div style={card}>
      <h2>Review</h2>
      <ul>
        <Link txt="Review" url="/review/review" />
        <Link txt="Review Filled" url="/review/reviewFilled" />
        <Link txt="Review Done" url="/review/reviewDone" />
        <Link txt="Review Remove (popup)" url="/review/reviewRemove" />
      </ul>
    </div>
    <div style={card}>
      <h2>Host payout history</h2>
      <ul>
        <Link txt="Reports Empty" url="/host_payout_history/reportsEmpty" />
        <Link txt="Reports" url="/host_payout_history/reports" />
        <Link txt="Reports Filters No Results" url="/host_payout_history/reportsFiltersNoResults" />
        <Link txt="Payout Details (popup)" url="/host_payout_history/payoutDetails" />
      </ul>
    </div>
    <div style={card}>
      <h2>Sight Details</h2>
      <ul>
        <Link txt="Sight Details" url="/sight_details/sightDetails" />
        <Link txt="Sight Details Map (popup)" url="/sight_details/sightDetailsMap" />
        <Link txt="Sight Details Share (popup)" url="/sight_details/sightDetailsShare" />
      </ul>
    </div>
    <div style={card}>
      <h2>Checkout</h2>
      <ul>
        <Link txt="Checkout" url="/checkout/checkout" />
        <Link txt="Checkout Credit Card" url="/checkout/checkoutCreditCard" />
        <Link txt="Checkout Credit Card Filled" url="/checkout/checkoutCreditCardFilled" />
        <Link txt="Checkout Paypal" url="/checkout/checkoutPaypal" />
        <Link txt="Checkout Filled" url="/checkout/checkoutFilled" />
        <Link txt="Checkout Done" url="/checkout/checkoutDone" />
        <Link txt="Checkout Sign In" url="/checkout/checkoutSignIn" />
        <Link txt="Checkout Sign Up" url="/checkout/checkoutSignUp" />
        <Link txt="Checkout Dates (popup)" url="/checkout/checkoutDates" />
        <Link txt="Checkout Guests (popup)" url="/checkout/checkoutGuests" />
        <Link txt="Checkout Cancellation (popup)" url="/checkout/checkoutCancellation" />
        <Link txt="Checkout Address (popup)" url="/checkout/checkoutAddress" />
        <Link txt="Checkout License (popup)" url="/checkout/checkoutLicense" />
        <Link txt="Checkout Getting Ready (popup)" url="/checkout/checkoutGettingReady" />
        <Link txt="Checkout Reviewing (popup)" url="/checkout/checkoutReviewing" />
      </ul>
    </div>
    <div style={card}>
      <h2>Email Template</h2>
      <ul>
        <Link txt="Email Template" url="/email/email-template.html" />
      </ul>
    </div>
  </div>
);
