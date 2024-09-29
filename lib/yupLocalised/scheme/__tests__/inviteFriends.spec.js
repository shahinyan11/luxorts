import schema from '../inviteFriends';

describe('Invite friends validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
