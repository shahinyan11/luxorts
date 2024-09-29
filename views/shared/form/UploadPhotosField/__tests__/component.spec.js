import { shallow } from 'enzyme';

import mockedListingPhotos from 'views/__mocks__/mockedListingPhotos';

import useContainer from '../hook';
import UploadPhotosField from '../component';

const mockedHookData = {
  value: mockedListingPhotos,
  dropzoneRef: {},
  inputFileRef: {},
  onDropHandler: jest.fn(),
  onDropRejectedHandler: jest.fn(),
  uploadPhotosClickHandler: jest.fn(),
  onRemovePhotoCreator: jest.fn(() => jest.fn()),
  onEditPhotoCreator: jest.fn(() => jest.fn()),
  onPreviewPhotoCreator: jest.fn(() => jest.fn()),
  handleEditFile: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('UploadPhotosField component', () => {
  const props = {
    name: 'name',
    onRemove: jest.fn(),
  };

  let component = null;

  beforeEach(() => {
    component = shallow(<UploadPhotosField {...props} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('children matches snapshot', () => {
    const children = component.find('Dropzone').dive();

    expect(children).toMatchSnapshot();
  });

  it('children matches snapshot when value.length equals 0', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      value: [],
    });

    component = shallow(<UploadPhotosField {...props} />);

    const children = component.find('Dropzone').dive();

    expect(children).toMatchSnapshot();
  });
});
