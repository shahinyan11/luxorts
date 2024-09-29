import { shallow } from 'enzyme';

import { SORT_DIRECTIONS } from 'constants';

import SortButton from '../component';

describe('SortButton component', () => {
  const props = {
    onClickHandler: jest.fn(),
    text: { id: 'text.id' },
    sort: { sortKey: 'sortKey', direction: SORT_DIRECTIONS.ASCEND },
    sortKey: 'sortKey',
  };

  const component = shallow(<SortButton {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
