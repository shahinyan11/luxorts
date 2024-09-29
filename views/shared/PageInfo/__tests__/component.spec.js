import { shallow } from 'enzyme';

import SvgIcon from 'views/shared/SvgIcon';

import PageInfo from '../component';

describe('PageInfo component', () => {
  const props = {
    title: { id: 'test.id' },
    description: { id: 'test.id' },
    icon: <SvgIcon icon="guests" />,
  };

  const component = shallow(<PageInfo {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
