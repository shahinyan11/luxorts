import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import getUserDrivingLicenseFullName from '../getUserDrivingLicenseFullName';

describe('getUserDrivingLicenseFullName util', () => {
  it('should returns user driving license full name', () => {
    expect(getUserDrivingLicenseFullName(mockedCurrentUser)).toBe('Evhenii Test');
  });

  it('should returns empty string', () => {
    expect(getUserDrivingLicenseFullName(null)).toBe('');
  });
});
