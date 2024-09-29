import { shallow } from 'enzyme';

import AdditionalItems from '../component';

describe('AdditionalItems component', () => {
  const props = {
    items: [{ id: 'id', name: 'name', description: 'description', paid: false }],
    onRemove: jest.fn(),
    onAdd: jest.fn(),
    isAddButtonDisabled: false,
    isLoading: false,
    namePlaceholder: { id: 'namePlaceholder.id' },
    descriptionPlaceholder: { id: 'descriptionPlaceholder.id' },
  };

  const component = shallow(<AdditionalItems {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when withPaid equals true', () => {
    component.setProps({
      withPaid: true,
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when withDescription equals false', () => {
    component.setProps({
      withDescription: false,
    });

    expect(component).toMatchSnapshot();
  });
});
