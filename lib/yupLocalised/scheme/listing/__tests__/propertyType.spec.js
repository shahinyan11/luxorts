import schema from '../propertyType';

describe('Add new listing. Property Type validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
