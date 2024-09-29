import { shallow } from 'enzyme';

import FAQ from '../component';

describe('FAQ component', () => {
  const component = shallow(<FAQ />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
