import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Services from '../component';

const mockedHookData = {
  formik,
  approvedServices: {
    foo: {
      id: 'foo',
      name: 'name',
      description: 'description',
    },
  },
  notApprovedServices: [
    {
      id: 'bar',
      name: 'name',
      description: 'description',
    },
  ],
  onBack: jest.fn(),
  handleSubmit: jest.fn(),
  handleAddNotApprovedService: jest.fn(),
  handleRemoveNotApprovedServiceCreator: jest.fn(() => jest.fn()),
  isAddButtonDisabled: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Services component', () => {
  const component = shallow(<Services />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
