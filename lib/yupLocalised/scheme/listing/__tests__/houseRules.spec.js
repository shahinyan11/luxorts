import schema from '../houseRules';

describe('Add new listing. House rules validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
