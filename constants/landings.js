export const FAQ_TABS_QUESTIONS = {
  1: {
    id: '1',
    title: { id: 'faq.question.creatingAccount.title' },
    text: { id: 'faq.question.creatingAnAccount.text' },
  },
  2: {
    id: '2',
    title: { id: 'faq.question.bookingTrip.title' },
    text: { id: 'faq.question.bookingTrip.text' },
  },
  3: {
    id: '3',
    title: { id: 'faq.question.cancelMyReservation.title' },
    text: { id: 'faq.question.cancelMyReservation.text' },
  },
  4: {
    id: '4',
    title: { id: 'faq.question.payOutsideOfThePlatform.title' },
    text: { id: 'faq.question.payOutsideOfThePlatform.text' },
  },
  5: {
    id: '5',
    title: { id: 'faq.question.updateOrRecoverPassword.title' },
    text: { id: 'faq.question.updateOrRecoverPassword.text' },
  },
  6: {
    id: '6',
    title: { id: 'faq.question.whatIsLuxorts.title' },
    text: { id: 'faq.question.whatIsLuxorts.text' },
  },
};

export const FAQ_TABS = [
  {
    id: 'tab_1',
    title: { id: 'shared.forGuests' },
    questions: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'tab_2',
    title: { id: 'shared.forHosts' },
    questions: [6, 1, 3, 4, 5],
  },
  {
    id: 'tab_3',
    title: { id: 'shared.general' },
    questions: [3, 4, 5, 6],
  },
];
