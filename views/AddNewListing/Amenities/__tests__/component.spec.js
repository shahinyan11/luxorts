import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Amenities from '../component';

const mockedHookData = {
  formik,
  approvedAmenities: {
    Bathroom: {
      foo: {
        id: 'foo',
        name: 'name',
        description: 'description',
      },
    },
  },
  notApprovedAmenities: [
    {
      id: 'bar',
      name: 'name',
      description: 'description',
    },
  ],
  onBack: jest.fn(),
  handleSubmit: jest.fn(),
  handleAddNotApprovedAmenity: jest.fn(),
  handleRemoveNotApprovedAmenityCreator: jest.fn(() => jest.fn()),
  isAddButtonDisabled: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Amenities component', () => {
  const component = shallow(<Amenities />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
