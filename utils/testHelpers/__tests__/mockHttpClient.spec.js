import mockHttpClient from '../mockHttpClient';

describe('mockHttpClient', () => {
  describe('returns mock', () => {
    const method = 'get';
    const response = {
      data: { id: '1' },
    };

    it('resolve', () => {
      const mock = mockHttpClient({ method, response });
      expect(mock).toEqual(
        expect.objectContaining({
          [method]: expect.any(Function),
        }),
      );
      expect(mock[method]()).resolves.toBe(response);
    });

    it('reject', () => {
      const mock = mockHttpClient({ method, response, reject: true });
      expect(mock).toEqual(
        expect.objectContaining({
          [method]: expect.any(Function),
        }),
      );
      expect(mock[method]()).rejects.toBe(response);
    });
  });
});
