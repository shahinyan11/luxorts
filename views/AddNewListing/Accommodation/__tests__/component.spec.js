import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Accommodation from '../component';

const mockedHookData = {
  formik,
  onBack: jest.fn(),
  onListingBedroomsChange: jest.fn(),
  onListingBathroomsChange: jest.fn(),
  handleAddCustomBedCreator: jest.fn(),
  handleRemoveCustomBedCreator: jest.fn(),
  onBedAmountChangeHandlerCreator: jest.fn(),
  handleAddCustomBathCreator: jest.fn(),
  handleRemoveCustomBathCreator: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Accommodation component', () => {
  const component = shallow(<Accommodation />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
