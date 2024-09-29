import schema from '../codeVerification';

describe('Code verification validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
