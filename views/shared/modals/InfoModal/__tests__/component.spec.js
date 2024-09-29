import { shallow } from 'enzyme';

import InfoModal from '../component';

describe('InfoModal component', () => {
  const props = {
    description: { id: 'description.id' },
  };
  const component = shallow(<InfoModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when onConfirm is present', () => {
    component.setProps({
      onConfirm: jest.fn(),
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when confirmText is present', () => {
    component.setProps({
      confirmText: { id: 'confirmText.id' },
    });

    expect(component).toMatchSnapshot();
  });
});
