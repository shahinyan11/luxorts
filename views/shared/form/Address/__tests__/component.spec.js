import { shallow } from 'enzyme';

import mockedCountries from 'views/__mocks__/mockedCountries';

import Address from '../component';

jest.mock('country-region-data/data.json', () => mockedCountries);
jest.mock('formik', () => ({
  useFormikContext: jest.fn().mockImplementation(() => ({
    values: { test: '' },
  })),
}));

describe('Address component', () => {
  const component = shallow(<Address />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
