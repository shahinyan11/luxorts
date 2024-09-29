import * as types from 'state/modal/types';

export const showModal = ({ modalType, modalProps }) => ({
  type: types.SHOW_MODAL,
  modalType,
  modalProps,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});
