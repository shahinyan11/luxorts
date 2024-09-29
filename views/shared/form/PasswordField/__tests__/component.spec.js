import { shallow } from 'enzyme';
import { mergeDeepRight } from 'ramda';

import useContainer from '../hook';
import PasswordField from '../component';

const mockedHookData = {
  helperProps: {
    text: { id: 'text.id' },
    hasError: false,
  },
  onChangeHandler: jest.fn(),
  onBlurHandler: jest.fn(),
  renderVisibilityIcon: jest.fn(),
  formattedOrRawMessage: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('PasswordField component', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<PasswordField {...defaultProps} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when formItemClassName is present', () => {
    component.setProps({
      formItemClassName: 'test',
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when label is present', () => {
    component.setProps({
      label: { id: 'label.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when helperProps.hasError equals true', () => {
    useContainer.mockReturnValueOnce(
      mergeDeepRight(mockedHookData, {
        helperProps: {
          hasError: true,
          error: { id: 'error.id' },
        },
      }),
    );

    component = shallow(<PasswordField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when withProgress equals true', () => {
    component.setProps({
      withProgress: true,
    });

    expect(component).toMatchSnapshot();
  });
});
