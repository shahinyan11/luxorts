import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Capabilities from '../component';

const mockedHookData = {
  formik,
  approvedCapabilities: {
    foo: {
      id: 'foo',
      name: 'name',
      description: 'description',
    },
  },
  notApprovedCapabilities: [
    {
      id: 'bar',
      name: 'name',
      description: 'description',
    },
  ],
  onBack: jest.fn(),
  handleSubmit: jest.fn(),
  handleAddNotApprovedCapability: jest.fn(),
  handleRemoveNotApprovedCapabilityCreator: jest.fn(() => jest.fn()),
  isAddButtonDisabled: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Capabilities component', () => {
  const component = shallow(<Capabilities />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
