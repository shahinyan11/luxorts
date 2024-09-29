import { shallow } from 'enzyme';

import FieldWrapper from '../component';

const mockedHookData = {
  toggleEditMode: jest.fn(),
  onSave: jest.fn(),
  editMode: false,
};

jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('FieldWrapper component', () => {
  const props = {
    label: { id: 'shared.field' },
    description: { id: 'personalInformation.field.description' },
    fieldNames: ['firstName', 'lastName'],
  };
  const component = shallow(<FieldWrapper {...props}>Foo</FieldWrapper>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
