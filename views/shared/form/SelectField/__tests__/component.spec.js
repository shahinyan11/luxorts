import { shallow } from 'enzyme';
import { mergeDeepRight } from 'ramda';

import fakeIntl from 'utils/testHelpers/fakeIntl';
import mockedBasePropertyTypes from 'views/__mocks__/mockedBasePropertyTypes';

import useContainer from '../hook';
import SelectField from '../component';

const mockedHookData = {
  intl: fakeIntl,
  meta: {
    error: null,
    touched: false,
  },
  field: { value: 'value' },
  onChangeHandler: jest.fn(),
  onBlurHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('SelectField component', () => {
  const defaultProps = {
    name: 'name',
    options: mockedBasePropertyTypes,
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<SelectField {...defaultProps} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when optionComponent is present', () => {
    component.setProps({
      optionComponent: ({ value }) => <div key={value} />,
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when options aren`t present', () => {
    component.setProps({
      options: undefined,
    });

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

  it('matches snapshot when placeholder is present', () => {
    component.setProps({
      placeholder: { id: 'placeholder.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when tooltip is present', () => {
    component.setProps({
      tooltip: { id: 'tooltip.id' },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when touched and has no error', () => {
    useContainer.mockReturnValueOnce(
      mergeDeepRight(mockedHookData, {
        meta: {
          touched: true,
        },
      }),
    );

    component = shallow(<SelectField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when touched and has error', () => {
    useContainer.mockReturnValueOnce(
      mergeDeepRight(mockedHookData, {
        meta: {
          touched: true,
          error: { id: 'error.id' },
        },
      }),
    );

    component = shallow(<SelectField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when touched and has error and tooltip is present', () => {
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

    component = shallow(<SelectField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
