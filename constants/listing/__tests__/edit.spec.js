import * as constants from '../edit';

it('edit constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
