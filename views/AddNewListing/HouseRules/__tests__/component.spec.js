import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import HouseRules from '../component';

const mockedHookData = {
  formik,
  approvedHouseRules: {
    foo: {
      id: 'foo',
      name: 'name',
      description: 'description',
    },
  },
  notApprovedHouseRules: [
    {
      id: 'bar',
      name: 'name',
      description: 'description',
    },
  ],
  onBack: jest.fn(),
  handleSubmit: jest.fn(),
  handleAddNotApprovedHouseRule: jest.fn(),
  handleRemoveNotApprovedHouseRuleCreator: jest.fn(() => jest.fn()),
  isAddButtonDisabled: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('HouseRules component', () => {
  const component = shallow(<HouseRules />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
