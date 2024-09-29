import HTTP_STATUSES from 'http-status';

import { errorStatus, isErrorStatusNotFound, isErrorStatusUnauthorized } from '../httpErrors';

describe('errorStatus util', () => {
  it('should returns response status when error is present', () => {
    expect(errorStatus({ response: { status: 'status' } })).toBe('status');
  });

  it('should returns undefined when error isn`t present', () => {
    expect(errorStatus()).toBe(undefined);
  });
});

describe('isErrorStatusUnauthorized util', () => {
  it('should returns true when status equals 401', () => {
    expect(isErrorStatusUnauthorized({ response: { status: HTTP_STATUSES.UNAUTHORIZED } })).toBe(
      true,
    );
  });

  it('should returns false when status does not equals 401', () => {
    expect(isErrorStatusUnauthorized({ response: { status: 'any' } })).toBe(false);
  });
});

describe('isErrorStatusNotFound util', () => {
  it('should returns true when status equals 404', () => {
    expect(isErrorStatusNotFound({ response: { status: HTTP_STATUSES.NOT_FOUND } })).toBe(true);
  });

  it('should returns false when status does not equals 404', () => {
    expect(isErrorStatusNotFound({ response: { status: 'any' } })).toBe(false);
  });
});
