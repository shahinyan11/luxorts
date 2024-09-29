import yupLocalized from '../index';

describe('yupLocalized', () => {
  it('matches snapshot', () => {
    expect(yupLocalized).toMatchSnapshot();
  });
});
