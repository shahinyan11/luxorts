import { shallow } from 'enzyme';
import { mergeDeepRight } from 'ramda';

import useContainer from '../hook';
import CurrencyInputField from '../component';

const mockedHookData = {
  meta: {
    error: null,
    touched: false,
  },
  field: { value: 'value', name: 'name', onValueChangeHandler: jest.fn() },
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('CurrencyInputField component matches snapshot', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<CurrencyInputField {...defaultProps} />);
  });

  it('with default props', () => {
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

  it('when placeholder is present', () => {
    component.setProps({
      placeholder: { id: 'placeholder.id' },
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

    component = shallow(<CurrencyInputField {...defaultProps} />);

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

    component = shallow(<CurrencyInputField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('when tooltip is present', () => {
    component.setProps({
      tooltip: { id: 'tooltip.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('when touched and has error and tooltip is present', () => {
    useContainer.mockReturnValueOnce(
      mergeDeepRight(mockedHookData, {
        meta: {
          touched: true,
          error: { id: 'error.id' },
        },
      }),
    );

    const props = {
      ...defaultProps,
      tooltip: { id: 'tooltip.id' },
    };

    component = shallow(<CurrencyInputField {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('when suffix is present', () => {
    component.setProps({
      suffix: { id: 'suffix.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('when allowNegativeValue is present and equals true', () => {
    component.setProps({
      allowNegativeValue: true,
    });

    expect(component).toMatchSnapshot();
  });
});
