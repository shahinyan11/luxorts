import schema from '../currentPassword';

describe('Current password validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
