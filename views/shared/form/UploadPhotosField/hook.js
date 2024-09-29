import { useCallback, useEffect, useRef, useState } from 'react';
import { useField } from 'formik';
import { useDispatch } from 'react-redux';
import { findIndex, path, propEq } from 'ramda';
import { v4 as uuid } from 'uuid';
import Sortable from 'sortablejs';
import { ErrorCode } from 'react-dropzone';

import {
  PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE,
  PHOTOS_VALIDATION,
} from 'constants/validations';

import sortByPositionHelper from 'utils/sortByPositionHelper';

import useMount from 'hooks/useMount';
import useImmutableCallback from 'hooks/useImmutableCallback';

import { showMessage } from 'state/flash-messages/actions';
import { MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { showModal } from 'state/modal/actions';

function useContainer({ name, onRemove }) {
  const dispatch = useDispatch();

  // state
  const [order, setOrder] = useState([]);
  const [editPhotoIdx, setEditPhotoIdx] = useState(null);

  // refs
  const dropzoneRef = useRef();
  const inputFileRef = useRef();
  const acceptedFilesCount = useRef(0);

  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  /**
   * On drop files handler
   * @param acceptedFiles {array}
   * @type {(function(*): void)|*}
   */
  const onDropHandler = useCallback(
    (acceptedFiles) => {
      acceptedFilesCount.current = acceptedFiles.length;

      const count = value.length + acceptedFiles.length;

      if (count > PHOTOS_VALIDATION.MAX.COUNT) {
        const difference = PHOTOS_VALIDATION.MAX.COUNT - value.length;

        dispatch(
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

        return;
      }

      const photos = acceptedFiles.map((item, index) => ({
        id: uuid(),
        src: URL.createObjectURL(item),
        file: item,
        position: value.length + 1 + index,
        description: '',
        delete: false,
      }));

      setValue([...value, ...photos]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  /**
   * On reject dropped files handler
   * @param files {array}
   * @type {(function(*): void)|*}
   */
  const onDropRejectedHandler = useImmutableCallback((files) => {
    const errors = new Set();
    const isMultiple = acceptedFilesCount.current + files.length > 1;
    const codeType = isMultiple ? 'MULTIPLE' : 'SINGLE';

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      const errorCode = path(['errors', '0', 'code'], file);

      if (!errorCode || errors.has(errorCode)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      dispatch(
        showMessage({
          messageType: MESSAGE_TYPE.ERROR,
          description: PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE[errorCode][codeType],
        }),
      );

      errors.add(errorCode);
    }
  });

  /**
   * On upload photos button click handler
   * @type {(function(): void)|*}
   */
  const uploadPhotosClickHandler = useCallback(() => {
    if (!dropzoneRef.current || value.length >= PHOTOS_VALIDATION.MAX.COUNT) {
      return false;
    }

    dropzoneRef.current.open();

    return true;
  }, [value]);

  /**
   * Update order of photos
   */
  const updateOrder = () => {
    const ids = [];
    const container = document.getElementById('sortable');

    for (let i = 0; i < container.children.length; i += 1) {
      const elem = container.children[i];

      ids.push(elem.id);
    }

    setOrder(ids);
  };

  /**
   * Handle edit single uploaded file
   * @param event {object}
   * @type {(function(*): void)|*}
   */
  const handleEditFile = useCallback(
    (event) => {
      const file = event.target.files[0];

      // clear input file
      inputFileRef.current.value = null;

      if (!file) {
        return;
      }

      if (file.size > PHOTOS_VALIDATION.MAX.SIZE) {
        dispatch(
          showMessage({
            messageType: MESSAGE_TYPE.ERROR,
            description: PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE[ErrorCode.FileTooLarge].SINGLE,
          }),
        );

        return;
      }

      value[editPhotoIdx] = {
        ...value[editPhotoIdx],
        photoUrls: {},
        src: URL.createObjectURL(file),
        file,
      };

      setValue(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editPhotoIdx, value],
  );

  /**
   * On edit photo callback creator
   * @param index {number}
   * @param event {object}
   * @type {(function(*): function)|*}
   */
  const onEditPhotoCreator = useImmutableCallback((index) => (event) => {
    event.stopPropagation();

    setEditPhotoIdx(index);
    inputFileRef.current.click();
  });

  /**
   * On preview photo callback creator
   * @param index {number}
   * @type {(function(*): function)|*}
   */
  const onPreviewPhotoCreator = useCallback(
    (index) => () => {
      dispatch(
        showModal({
          modalType: 'GALLERY_MODAL',
          modalProps: {
            initialSlide: index,
            photos: value,
          },
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  /**
   * On remove photo callback creator
   * @param deletedItem {object}
   * @param event {object}
   * @type {(function(*): function)|*}
   */
  const onRemovePhotoCreator = useCallback(
    (deletedItem) => async (event) => {
      event.stopPropagation();

      const photos = value.filter((img) => img.id !== deletedItem.id);

      if (onRemove) {
        onRemove(deletedItem);
      }

      await setValue(photos);

      updateOrder();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onRemove, value],
  );

  /**
   * Order of photos update handler
   */
  const handleOrderUpdate = () => {
    const newValue = [...value];

    order.forEach((id, index) => {
      const idx = findIndex(propEq('id', id))(newValue);

      newValue[idx].position = index + 1;
    });

    newValue.sort(sortByPositionHelper);

    setValue(newValue);
  };

  /**
   * On component mount handler
   */
  const onMountHandler = () => {
    const container = document.getElementById('sortable');

    Sortable.create(container, {
      draggable: '.upload-photos__item',
      onChange: updateOrder,
    });
  };

  /**
   * Lifecycle
   */
  useMount(onMountHandler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleOrderUpdate, [order]);

  return {
    value,
    dropzoneRef,
    inputFileRef,
    onDropHandler,
    onDropRejectedHandler,
    uploadPhotosClickHandler,
    onRemovePhotoCreator,
    onEditPhotoCreator,
    onPreviewPhotoCreator,
    handleEditFile,
    order,
    editPhotoIdx,
    updateOrder,
    handleOrderUpdate,
    onMountHandler,
  };
}

export default useContainer;
