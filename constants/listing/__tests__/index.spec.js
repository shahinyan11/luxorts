import * as constants from '../index';

it('general listing constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
