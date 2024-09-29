import schema from '../personalInformation';

describe('personalInformation form validation schema', () => {
  it('matches snapshot', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
