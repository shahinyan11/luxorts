import * as actions from '../actions';
import * as types from '../types';

it('showModal', () => {
  const modalType = 'CREATE_STORE';
  const modalProps = { customProp: 'customProp' };
  const expectedAction = { type: types.SHOW_MODAL, modalType, modalProps };

  expect(actions.showModal({ modalType, modalProps })).toEqual(expectedAction);
});

it('hideModal', () => {
  const expectedAction = { type: types.HIDE_MODAL };

  expect(actions.hideModal()).toEqual(expectedAction);
});
