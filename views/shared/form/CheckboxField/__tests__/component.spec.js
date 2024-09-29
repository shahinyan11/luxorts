import { shallow } from 'enzyme';

import CheckboxField from '../component';

const mockedFieldValue = {
  value: true,
};
jest.mock('formik', () => ({
  useField: jest.fn(() => [mockedFieldValue]),
}));

describe('CheckboxField component', () => {
  const props = {
    title: 'title',
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<CheckboxField {...props} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
