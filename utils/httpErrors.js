import HTTP_STATUSES from 'http-status';
import { path } from 'ramda';

export const errorStatus = (error) => path(['response', 'status'], error);

export const isErrorStatusUnauthorized = (error) =>
  errorStatus(error) === HTTP_STATUSES.UNAUTHORIZED;

export const isErrorStatusNotFound = (error) => errorStatus(error) === HTTP_STATUSES.NOT_FOUND;
