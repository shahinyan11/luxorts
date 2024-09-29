import * as constants from '../manageListings';

it('manageListings constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
