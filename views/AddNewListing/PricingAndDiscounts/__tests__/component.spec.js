import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import PricingAndDiscounts from '../component';

const mockedHookData = {
  formik,
  weeklyDiscountTooltip: 'weeklyDiscountTooltip',
  monthlyDiscountTooltip: 'monthlyDiscountTooltip',
  onBack: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('PricingAndDiscounts component', () => {
  const component = shallow(<PricingAndDiscounts />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
