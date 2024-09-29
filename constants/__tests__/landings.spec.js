import * as constants from '../landings';

it('landings constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
