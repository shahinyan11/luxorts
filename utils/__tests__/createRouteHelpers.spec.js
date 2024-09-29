import { createRoute } from '../createRouteHelpers';

describe('createRouteHelpers', () => {
  describe('createRoute helper', () => {
    it('should returns route from pathname', () => {
      expect(createRoute({ pathname: '/path-to-route' })).toBe('/path-to-route');
    });

    it('should returns route from pathname and id', () => {
      expect(createRoute({ pathname: '/path-to-route/[id]', id: 'uniq-id' })).toBe(
        '/path-to-route/uniq-id',
      );
    });

    it('should returns route from pathname and query params', () => {
      expect(
        createRoute({
          pathname: '/path-to-route',
          query: {
            foo: 'bar',
          },
        }),
      ).toBe('/path-to-route?foo=bar');
    });

    it('should returns route from pathname, id and query params', () => {
      expect(
        createRoute({
          pathname: '/path-to-route/[id]',
          id: 'uniq-id',
          query: {
            foo: 'bar',
          },
        }),
      ).toBe('/path-to-route/uniq-id?foo=bar');
    });
  });
});
