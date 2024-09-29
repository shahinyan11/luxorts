import * as constants from '../reservationPreferences';

it('listing reservation preferences constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
