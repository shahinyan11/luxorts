import { shallow } from 'enzyme';

import SwitchField from '../component';

const mockedHookData = {
  field: { value: true },
  onChangeHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('SwitchField component', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<SwitchField {...defaultProps} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when title is present', () => {
    component.setProps({
      title: 'title',
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when tooltip is present', () => {
    component.setProps({
      tooltip: 'tooltip',
    });

    expect(component).toMatchSnapshot();
  });
});
