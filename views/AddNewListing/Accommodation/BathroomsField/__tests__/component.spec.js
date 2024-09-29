import { shallow } from 'enzyme';
import { useField } from 'formik';

import BathroomsField from '../component';

jest.mock('formik', () => ({
  useField: jest.fn(() => [
    {
      value: [{ id: 'bathroom-1' }],
    },
  ]),
}));

describe('BathroomsField component', () => {
  const props = {
    handleAddCustomBathCreator: jest.fn(() => jest.fn()),
    handleRemoveCustomBathCreator: jest.fn(),
  };

  let component = shallow(<BathroomsField {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when bathrooms aren`t present', () => {
    useField.mockReturnValueOnce([{ value: [] }]);

    component = shallow(<BathroomsField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
