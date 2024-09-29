import { shallow } from 'enzyme';

import CountryOption from '../component';

describe('CountryOption component', () => {
  const component = shallow(<CountryOption countryName="countryName" />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
