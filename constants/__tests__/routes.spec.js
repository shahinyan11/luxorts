import * as constants from '../routes';

it('routes constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
