import { act, renderHook } from '@testing-library/react-hooks';

import { AVATAR_UPLOAD_BOUNDARIES, PHOTOS_VALIDATION } from 'constants/validations';

import { userUpdateAvatar } from 'state/concepts/session/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { showMessage } from 'state/flash-messages/actions';
import { dispatch } from '__mocks__/react-redux';

import useContainer from '../hook';

jest.mock('utils/users/getCroppedImg', () =>
  jest.fn(() => ({
    type: 'image/jpeg',
  })),
);

const mockFile = (size) => {
  global.File = class MockedFile {
    constructor() {
      this.size = size;
    }
  };
};

describe('UploadProfileImageModal useContainer hook', () => {
  let result = null;
  const props = { initialImgSrc: 'initialImgSrc' };

  beforeAll(() => {
    window.URL.createObjectURL = jest.fn((fileUrl) => fileUrl);
  });

  afterAll(() => {
    window.URL.createObjectURL.mockReset();
  });

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(props)));

    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onImageLoad method should updates crop state and center crop region considering to image width and height', () => {
    const { crop } = result.current;
    const event = {
      currentTarget: {
        width: 1000,
        height: 1000,
      },
    };
    const { width, height } = event.currentTarget;
    const minSize = Math.min(width, height, AVATAR_UPLOAD_BOUNDARIES.DEFAULT_CROP_DIAMETER);
    const delta = 20;

    const expected = {
      ...crop,
      width: minSize - delta,
      height: minSize - delta,
      x: width / 2 - (minSize - delta) / 2,
      y: height / 2 - (minSize - delta) / 2,
      image: event.currentTarget,
    };

    act(() => {
      result.current.onImageLoad(event);
    });

    expect(result.current.crop).toEqual(expected);
  });

  it('onCropChange method should updates crop state with new crop data', () => {
    act(() => {
      result.current.onCropChange('foo');
    });

    expect(result.current.crop).toEqual('foo');
  });

  it('onFileChange method should updates imgSrc state', () => {
    act(() => {
      result.current.onFileChange({ file: { originFileObj: 'originFileObj' } });
    });

    expect(result.current.imgSrc).toBe('originFileObj');
  });

  describe('onSave method', () => {
    it('should shows error when imgSrc isn`t present', () => {
      ({ result } = renderHook(() => useContainer({})));

      result.current.onSave();

      expect(dispatch).toHaveBeenCalledWith(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'validations.pleaseUploadTheImage' },
        }),
      );
    });

    it('should dispatches userUpdateAvatar action with file', async () => {
      mockFile(PHOTOS_VALIDATION.MAX.SIZE);

      await result.current.onSave();

      expect(dispatch).toHaveBeenCalledWith(userUpdateAvatar({ size: PHOTOS_VALIDATION.MAX.SIZE }));
    });

    it('should shows error when file.size large than allowed', async () => {
      mockFile(PHOTOS_VALIDATION.MAX.SIZE + 1);

      await result.current.onSave();

      expect(dispatch).toHaveBeenCalledWith(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: { id: 'validations.avatarValidationError' },
        }),
      );
    });
  });
});
