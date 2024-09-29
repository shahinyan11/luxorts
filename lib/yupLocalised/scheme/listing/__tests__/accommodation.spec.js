import schema from '../accommodation';

describe('Add new listing. Accommodation validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
