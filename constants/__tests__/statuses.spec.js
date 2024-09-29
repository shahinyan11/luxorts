import * as constants from '../statuses';

it('statuses constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
