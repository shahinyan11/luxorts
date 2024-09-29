import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import getUserFullName from '../getUserFullName';

describe('getUserFullName util', () => {
  it('should returns user full name', () => {
    expect(getUserFullName(mockedCurrentUser)).toBe('Evhenii Test');
  });

  it('should returns empty string', () => {
    expect(getUserFullName(null)).toBe('');
  });
});
