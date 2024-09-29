import { shallow } from 'enzyme';

import mockedListingBlockedTimePeriods from 'views/__mocks__/mockedListingBlockedTimePeriods';

import useContainer from '../hook';
import DateCellWrapper from '../component';

const mockedHookData = {
  isToday: true,
  isActual: true,
  isBlocked: false,
  isAnotherMonth: false,
  isSelectedCell: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('DateCellWrapper component', () => {
  const props = {
    value: new Date('15 Jun 2022 00:00:00 GMT'),
    listingBlockedTimePeriods: mockedListingBlockedTimePeriods,
  };

  let component = shallow(<DateCellWrapper {...props}>Foo</DateCellWrapper>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isAnotherMonth equals true and isToday equals false', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isToday: false,
      isAnotherMonth: true,
    });

    component = shallow(<DateCellWrapper {...props}>Foo</DateCellWrapper>);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isToday equals false and isActual equals false', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isToday: false,
      isActual: false,
    });

    component = shallow(<DateCellWrapper {...props}>Foo</DateCellWrapper>);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isBlocked equals true and isToday equals false', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isToday: false,
      isBlocked: true,
    });

    component = shallow(<DateCellWrapper {...props}>Foo</DateCellWrapper>);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isSelectedCell equals true and isActual equals true and isAnotherMonth equals false', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isSelectedCell: true,
    });

    component = shallow(<DateCellWrapper {...props}>Foo</DateCellWrapper>);

    expect(component).toMatchSnapshot();
  });
});
