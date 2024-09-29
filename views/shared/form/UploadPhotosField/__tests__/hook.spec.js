import { useRef } from 'react';
import { useField } from 'formik';
import { act, renderHook } from '@testing-library/react-hooks';
import Sortable from 'sortablejs';
import { ErrorCode } from 'react-dropzone';
import { findIndex, propEq } from 'ramda';

import {
  PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE,
  PHOTOS_VALIDATION,
} from 'constants/validations';

import sortByPositionHelper from 'utils/sortByPositionHelper';

import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { showModal } from 'state/modal/actions';
import { dispatch } from '__mocks__/react-redux';
import { mockedV4Value } from '__mocks__/uuid';

import useContainer from '../hook';

const mockedUseField = [{ name: 'name ' }, { value: [{ id: '1' }] }, { setValue: jest.fn() }];
jest.mock('formik', () => ({
  useField: jest.fn(() => mockedUseField),
}));

jest.mock('react', () => {
  const originReact = jest.requireActual('react');

  return {
    ...originReact,
    useRef: jest.fn(() => ({ current: null })),
  };
});

jest.spyOn(Sortable, 'create');

const invalidValue = [...Array(PHOTOS_VALIDATION.MAX.COUNT).keys()].map((id) => ({ id }));

const file = new File(['foo'], 'foo.txt', {
  type: 'text/plain',
});

describe('UploadPhotosField useContainer hook', () => {
  const props = { name: 'name', onRemove: jest.fn() };
  const mockedEvent = { stopPropagation: jest.fn() };

  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = mockedUseField;
  const { value } = meta;
  const { setValue } = helpers;

  beforeAll(() => {
    window.URL.createObjectURL = jest.fn(() => 'fileUrl');
  });

  afterAll(() => {
    window.URL.createObjectURL.mockReset();
  });

  let result = null;
  let sortContainer = null;

  beforeEach(() => {
    document.body.innerHTML = '';
    sortContainer = document.createElement('div');
    sortContainer.id = 'sortable';
    document.body.appendChild(sortContainer);

    ({ result } = renderHook(() => useContainer(props)));

    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onDropHandler method', () => {
    it('should dispatches error notification when photos count more than allowed', () => {
      result.current.onDropHandler(invalidValue);

      const difference = PHOTOS_VALIDATION.MAX.COUNT - value.length;

      expect(dispatch).toHaveBeenCalledWith(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: {
            id: 'validations.maxPhotosDifference',
            values: {
              count: PHOTOS_VALIDATION.MAX.COUNT,
              difference,
            },
          },
        }),
      );
    });

    it('should calls setValue with acceptedFiles when photos count less or equals allowed count of photos', () => {
      const acceptedFiles = [...Array(2).keys()].map(() => file);

      result.current.onDropHandler(acceptedFiles);

      const photos = acceptedFiles.map((item, index) => ({
        id: mockedV4Value,
        src: URL.createObjectURL(item),
        file: item,
        position: value.length + 1 + index,
        description: '',
        delete: false,
      }));

      expect(setValue).toHaveBeenCalledWith([...value, ...photos]);
    });
  });

  describe('onDropRejectedHandler method', () => {
    it('should dispatches unique error notifications ', () => {
      const files = [
        { errors: [{ code: ErrorCode.FileTooLarge }] },
        { errors: [{ code: ErrorCode.FileInvalidType }] },
        { errors: [{ code: ErrorCode.FileInvalidType }] },
        { errors: [] },
      ];

      result.current.onDropRejectedHandler(files);

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE[ErrorCode.FileTooLarge].MULTIPLE,
        }),
      );

      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description:
            PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE[ErrorCode.FileInvalidType].MULTIPLE,
        }),
      );
    });

    it('shouldn`t dispatches any error notifications ', () => {
      const files = [{ errors: [] }];

      result.current.onDropRejectedHandler(files);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe('uploadPhotosClickHandler method', () => {
    it('should calls dropzoneRef.current.open when dropzoneRef.current is present and value.length less than allowed', () => {
      const mockedOpen = jest.fn();

      useRef.mockReturnValueOnce({ current: { open: mockedOpen } });

      ({ result } = renderHook(() => useContainer(props)));

      expect(result.current.uploadPhotosClickHandler()).toBe(true);
      expect(mockedOpen).toHaveBeenCalled();
    });

    describe('should returns false', () => {
      it('when dropzoneRef.current isn`t present', () => {
        expect(result.current.uploadPhotosClickHandler()).toBe(false);
      });

      it('when dropzoneRef.current is present, but value.length more or equals than allowed', () => {
        const mockedOpen = jest.fn();

        useRef.mockReturnValueOnce({ current: { open: mockedOpen } });

        useField.mockReturnValueOnce([
          { name: 'name ' },
          { value: invalidValue },
          { setValue: jest.fn() },
        ]);

        ({ result } = renderHook(() => useContainer(props)));

        expect(result.current.uploadPhotosClickHandler()).toBe(false);
        expect(mockedOpen).not.toHaveBeenCalled();
      });
    });
  });

  it('updateOrder method should update order state via html', () => {
    sortContainer.innerHTML = '<div id="1">1</div>';

    act(() => {
      result.current.updateOrder();
    });

    expect(result.current.order).toEqual(['1']);
  });

  describe('handleEditFile method', () => {
    it('shouldn`t calls anything when file isn`t present', () => {
      useRef.mockReturnValue({ current: { value: 'value' } });

      ({ result } = renderHook(() => useContainer(props)));

      setValue.mockClear();

      result.current.handleEditFile({ target: { files: [] } });

      expect(dispatch).not.toHaveBeenCalled();
      expect(setValue).not.toHaveBeenCalled();
    });

    it('should dispatches error notification when file.size more than allowed', () => {
      useRef.mockReturnValue({ current: { value: 'value' } });

      ({ result } = renderHook(() => useContainer(props)));

      result.current.handleEditFile({
        target: { files: [{ size: PHOTOS_VALIDATION.MAX.SIZE + 1 }] },
      });

      expect(dispatch).toHaveBeenCalledWith(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE[ErrorCode.FileTooLarge].SINGLE,
        }),
      );
    });

    it('should calls setValue', () => {
      useRef.mockReturnValue({ current: { click: jest.fn() } });

      ({ result } = renderHook(() => useContainer(props)));

      act(() => {
        result.current.onEditPhotoCreator(0)(mockedEvent);
      });

      result.current.handleEditFile({
        target: {
          files: [file],
        },
      });

      value[0] = {
        ...value[0],
        photoUrls: {},
        src: 'fileUrl',
        file,
      };

      expect(setValue).toHaveBeenCalledWith(value);
    });
  });

  it('onEditPhotoCreator method should sets current index and calls inputFileRef.current.click', () => {
    const mockedClick = jest.fn();
    useRef.mockReturnValue({ current: { click: mockedClick } });

    ({ result } = renderHook(() => useContainer(props)));

    act(() => {
      result.current.onEditPhotoCreator(2)(mockedEvent);
    });

    expect(mockedEvent.stopPropagation).toHaveBeenCalled();
    expect(result.current.editPhotoIdx).toBe(2);
    expect(mockedClick).toHaveBeenCalled();
  });

  it('onPreviewPhotoCreator method should dispatches GALLERY_MODAL', () => {
    result.current.onPreviewPhotoCreator(0)();

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'GALLERY_MODAL',
        modalProps: {
          initialSlide: 0,
          photos: value,
        },
      }),
    );
  });

  it('onRemovePhotoCreator should calls setValue and onRemove callback', async () => {
    await act(() => result.current.onRemovePhotoCreator(value[0])(mockedEvent));

    expect(mockedEvent.stopPropagation).toHaveBeenCalled();
    expect(props.onRemove).toHaveBeenCalledWith(value[0]);
    expect(setValue).toHaveBeenCalledWith([]);
  });

  it('handleOrderUpdate method should update value via order state', () => {
    sortContainer.innerHTML = '<div id="1">1</div>';

    act(() => {
      result.current.updateOrder();
    });

    result.current.handleOrderUpdate();

    result.current.order.forEach((id, index) => {
      const idx = findIndex(propEq('id', id))(value);

      value[idx].position = index + 1;
    });

    value.sort(sortByPositionHelper);

    expect(setValue).toHaveBeenCalledWith(value);
  });

  it('onMountHandler method should calls Sortable.create', () => {
    result.current.onMountHandler();

    expect(Sortable.create).toHaveBeenCalledWith(sortContainer, {
      draggable: '.upload-photos__item',
      onChange: result.current.updateOrder,
    });
  });
});
