import * as constants from '../reduxPersist';

it('reduxPersist constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
