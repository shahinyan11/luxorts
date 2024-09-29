import schema from '../description';

describe('Add new listing. Description validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
