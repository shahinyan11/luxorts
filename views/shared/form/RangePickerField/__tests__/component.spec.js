import { shallow } from 'enzyme';

import fakeIntl from 'utils/testHelpers/fakeIntl';

import useContainer from '../hook';
import RangePickerField from '../component';

const mockedHookData = {
  intl: fakeIntl,
  error: null,
  touched: false,
  onChangeHandler: jest.fn(),
  onBlurHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('RangePickerField component', () => {
  const defaultProps = {
    name: 'name',
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<RangePickerField {...defaultProps} />);
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

  it('matches snapshot when placeholder is present', () => {
    component.setProps({
      placeholder: [{ id: 'placeholder.id' }, { id: 'placeholder.id' }],
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
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      touched: true,
    });

    component = shallow(<RangePickerField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when touched and has error', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      touched: true,
      error: { id: 'error.id' },
    });

    component = shallow(<RangePickerField {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when touched and has error and tooltip is present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      touched: true,
      error: { id: 'error.id' },
    });

    const props = {
      ...defaultProps,
      tooltip: { id: 'tooltip.id' },
    };

    component = shallow(<RangePickerField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
