import schema from '../reservationPreferences';

describe('Add new listing. Reservation Preferences validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
