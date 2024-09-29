import { shallow } from 'enzyme';
import { omit } from 'ramda';

import useContainer from '../hook';
import PhoneField from '../component';

const mockedHookData = {
  error: null,
  touched: false,
  value: 'value',
  onChangeHandler: jest.fn(),
  onBlurHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('PhoneField component', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<PhoneField {...defaultProps} />);
  });

  it('matches snapshot', () => {
    const PhoneInput = component.children();

    const formItemProps = omit(['children'], component.props());
    const phoneInputProps = omit(['labels', 'metadata'], PhoneInput.props());

    expect(formItemProps).toMatchSnapshot();
    expect(phoneInputProps).toMatchSnapshot();
  });

  it('matches snapshot when formItemClassName is present', () => {
    component.setProps({
      formItemClassName: 'test',
    });

    const formItemProps = omit(['children'], component.props());

    expect(formItemProps).toMatchSnapshot();
  });

  it('matches snapshot when label is present', () => {
    component.setProps({
      label: { id: 'label.id' },
    });

    const formItemProps = omit(['children'], component.props());

    expect(formItemProps).toMatchSnapshot();
  });

  it('matches snapshot when touched and has no error', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      touched: true,
    });

    component = shallow(<PhoneField {...defaultProps} />);
    const formItemProps = omit(['children'], component.props());

    expect(formItemProps).toMatchSnapshot();
  });

  it('matches snapshot when touched and has error', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      touched: true,
      error: { id: 'error.id' },
    });

    component = shallow(<PhoneField {...defaultProps} />);
    const formItemProps = omit(['children'], component.props());

    expect(formItemProps).toMatchSnapshot();
  });
});
