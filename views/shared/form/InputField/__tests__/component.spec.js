import { shallow } from 'enzyme';
import { mergeDeepRight } from 'ramda';

import fakeIntl from 'utils/testHelpers/fakeIntl';

import useContainer from '../hook';
import InputField from '../component';

const mockedHookData = {
  intl: fakeIntl,
  meta: {
    error: null,
    touched: false,
  },
  field: { value: 'value', name: 'name', onBlur: jest.fn(), onChange: jest.fn() },
  onKeyDown: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('InputField component matches snapshot', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<InputField {...defaultProps} />);
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

  it('when placeholder is present', () => {
    component.setProps({
      placeholder: { id: 'placeholder.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('when asComponent is present', () => {
    component.setProps({
      asComponent: () => <div />,
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

    component = shallow(<InputField {...defaultProps} />);

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

    component = shallow(<InputField {...defaultProps} />);

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

    component = shallow(<InputField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
