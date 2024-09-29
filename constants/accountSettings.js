import ROUTES from './routes';

// eslint-disable-next-line import/prefer-default-export
export const MENU_ITEMS = [
  {
    href: ROUTES.ACCOUNT_SETTINGS.PERSONAL_INFORMATION.PATH,
    icon: 'profile',
    title: { id: 'personalInformation.title' },
    description: { id: 'shared.providePersonalDetailsAndHowWeCanReachYou' },
  },
  {
    href: ROUTES.ACCOUNT_SETTINGS.LOGIN_AND_SECURITY.PATH,
    icon: 'user-shield',
    title: { id: 'shared.loginSecurity' },
    description: { id: 'shared.updateYourPasswordAndSecureYourAccount' },
  },
  {
    href: '#',
    icon: 'bank-card',
    title: { id: 'shared.paymentsPayouts' },
    description: { id: 'shared.reviewPaymentsPayouts' },
  },
  {
    href: ROUTES.ACCOUNT_SETTINGS.INVITE_FRIENDS.PATH,
    icon: 'guests',
    title: { id: 'shared.inviteFriends' },
    description: { id: 'shared.inviteFriendsToJoinLuxortsCommunity' },
  },
];

export const GENDER_TYPE = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
};

export const GENDER_OPTIONS = [
  { value: GENDER_TYPE.MALE, label: { id: 'shared.male' } },
  { value: GENDER_TYPE.FEMALE, label: { id: 'shared.female' } },
  { value: GENDER_TYPE.OTHER, label: { id: 'shared.other' } },
];
