import { shallow } from 'enzyme';
import { mergeDeepRight } from 'ramda';

import useContainer from '../hook';
import InputNumberField from '../component';

const mockedHookData = {
  meta: {
    error: null,
    touched: false,
  },
  field: { value: 'value', name: 'name', onBlur: jest.fn() },
  onChangeHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('InputNumberField component matches snapshot', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<InputNumberField {...defaultProps} />);
  });

  it('with default props', () => {
    expect(component).toMatchSnapshot();
  });

  it('when withFormItem equals false', () => {
    component.setProps({
      withFormItem: false,
    });

    expect(component).toMatchSnapshot();
  });

  it('when formItemClassName is present', () => {
    component.setProps({
      formItemClassName: 'test',
    });

    expect(component).toMatchSnapshot();
  });

  it('when label is present', () => {
    component.setProps({
      label: { id: 'label.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('when touched and has no error', () => {
    useContainer.mockReturnValueOnce(
      mergeDeepRight(mockedHookData, {
        meta: {
          touched: true,
        },
      }),
    );

    component = shallow(<InputNumberField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('when touched and has error', () => {
    useContainer.mockReturnValueOnce(
      mergeDeepRight(mockedHookData, {
        meta: {
          touched: true,
          error: { id: 'error.id' },
        },
      }),
    );

    component = shallow(<InputNumberField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });
});
