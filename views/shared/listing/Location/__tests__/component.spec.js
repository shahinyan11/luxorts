import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import ListingLocation from '../component';

describe('ListingLocation component', () => {
  const props = {
    formik,
  };
  const component = shallow(<ListingLocation {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
