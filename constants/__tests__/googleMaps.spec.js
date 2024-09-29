import * as constants from '../googleMaps';

it('googleMaps constants match snapshot', () => {
  expect(constants).toMatchSnapshot();
});
