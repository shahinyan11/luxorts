import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import getUserInitials from '../getUserInitials';

describe('getUserInitials util', () => {
  it('should returns user initials', () => {
    expect(getUserInitials(mockedCurrentUser)).toBe('ET');
  });

  it('should returns empty string', () => {
    expect(getUserInitials(null)).toBe('');
  });
});
