import { shallow } from 'enzyme';

import PricingAndDiscounts from '../component';

describe('PricingAndDiscounts component', () => {
  const component = shallow(<PricingAndDiscounts />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
