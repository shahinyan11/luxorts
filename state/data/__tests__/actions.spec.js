import * as actions from '../actions';
import * as types from '../types';

it('dataApiRequest', () => {
  const endpoint = '/test';
  const expectedAction = { type: types.DATA_API_REQUEST, endpoint };

  expect(actions.dataApiRequest({ endpoint })).toEqual(expectedAction);
});

it('dataApiSuccess', () => {
  const endpoint = '/test';
  const response = { id: '1' };
  const expectedAction = { type: types.DATA_API_SUCCESS, endpoint, response };

  expect(actions.dataApiSuccess({ endpoint, response })).toEqual(expectedAction);
});

it('dataApiFailure', () => {
  const endpoint = '/test';
  const expectedAction = { type: types.DATA_API_FAILURE, endpoint };

  expect(actions.dataApiFailure({ endpoint })).toEqual(expectedAction);
});

it('dataDelete', () => {
  const kind = 'stores';
  const ids = ['1', '2'];
  const expectedAction = { type: types.DATA_DELETE, kind, ids };

  expect(actions.dataDelete({ kind, ids })).toEqual(expectedAction);
});

it('dataRemoveRelationship', () => {
  const kind = 'stores';
  const ownerId = '1';
  const relationship = 'products';
  const ids = ['1', '2'];

  const expectedAction = {
    type: types.DATA_REMOVE_RELATIONSHIP,
    kind,
    ownerId,
    ids,
    relationship,
  };

  expect(
    actions.dataRemoveRelationship({
      kind,
      ids,
      relationship,
      ownerId,
    }),
  ).toEqual(expectedAction);
});

it('dataDeleteEntity', () => {
  const kind = 'stores';
  const expectedAction = { type: types.DATA_DELETE_ENTITY, kind };

  expect(actions.dataDeleteEntity(kind)).toEqual(expectedAction);
});
