import { shallow } from 'enzyme';

import InputHelp from '../component';

describe('InputHelp component', () => {
  const defaultProps = {
    text: { id: 'text.id' },
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<InputHelp {...defaultProps} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when type is present', () => {
    component.setProps({
      type: 'success',
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when icon is present', () => {
    component.setProps({
      icon: 'checked',
    });

    expect(component).toMatchSnapshot();
  });
});
