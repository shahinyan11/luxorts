import schema from '../accommodation';

describe('Add new listing. Location validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
