import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import ReservationPreferences from '../component';

const mockedHookData = {
  formik: {
    ...formik,
    values: {
      priorNotified: 'priorNotified',
    },
  },
  onBack: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('ReservationPreferences component', () => {
  const component = shallow(<ReservationPreferences />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
