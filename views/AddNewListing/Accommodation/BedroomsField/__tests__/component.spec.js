import { shallow } from 'enzyme';
import { useField } from 'formik';

import BedroomsField from '../component';

jest.mock('formik', () => ({
  useField: jest.fn(() => [
    {
      value: [{ id: 'bedroom-1' }],
    },
  ]),
}));

describe('BedroomsField component', () => {
  const props = {
    handleAddCustomBedCreator: jest.fn(() => jest.fn()),
    handleRemoveCustomBedCreator: jest.fn(),
    onBedAmountChangeHandlerCreator: jest.fn(),
  };

  let component = shallow(<BedroomsField {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when bedrooms aren`t present', () => {
    useField.mockReturnValueOnce([{ value: [] }]);

    component = shallow(<BedroomsField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
