import { shallow } from 'enzyme';

import Photo from '../component';

describe('UploadPhotosField. Photo component', () => {
  const props = {
    id: 'id',
    src: 'src',
    isMain: false,
    onRemove: jest.fn(),
    onEdit: jest.fn(),
    onPreview: jest.fn(),
    descriptionPath: 'descriptionPath',
  };

  const component = shallow(<Photo {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isMain equals true', () => {
    component.setProps({
      isMain: true,
    });

    expect(component).toMatchSnapshot();
  });
});
