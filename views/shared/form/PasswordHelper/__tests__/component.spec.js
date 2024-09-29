import { shallow } from 'enzyme';

import PasswordHelper from '../component';

describe('PasswordHelper component', () => {
  const defaultProps = {
    text: { id: 'text.id' },
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<PasswordHelper {...defaultProps} />);
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

  it('matches snapshot when error is present and hasError is not present', () => {
    component.setProps({
      error: { id: 'error.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when error is present and hasError equals true', () => {
    component.setProps({
      error: { id: 'error.id' },
      hasError: true,
    });

    expect(component).toMatchSnapshot();
  });
});
