import schema from '../accommodationFilter';

describe('accommodationFilter validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
