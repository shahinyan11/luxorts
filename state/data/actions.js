import * as types from 'state/data/types';

export const dataApiRequest = ({ endpoint }) => ({
  type: types.DATA_API_REQUEST,
  endpoint,
});

export const dataApiSuccess = ({ endpoint, response }) => ({
  type: types.DATA_API_SUCCESS,
  endpoint,
  response,
});

export const dataApiFailure = ({ endpoint }) => ({
  type: types.DATA_API_FAILURE,
  endpoint,
});

export const dataDelete = ({ kind, ids }) => ({
  type: types.DATA_DELETE,
  kind,
  ids,
});

export const dataRemoveRelationship = ({ kind, ownerId, relationship, ids }) => ({
  type: types.DATA_REMOVE_RELATIONSHIP,
  kind,
  ownerId,
  relationship,
  ids,
});

export const dataDeleteEntity = (kind) => ({
  type: types.DATA_DELETE_ENTITY,
  kind,
});
