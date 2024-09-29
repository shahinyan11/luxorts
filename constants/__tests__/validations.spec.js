import * as constants from '../validations';

it('validations constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
