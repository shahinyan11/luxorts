import * as Router from 'next/router';

export const router = {
  push: jest.fn(),
  back: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  query: {},
  pathname: '/',
  beforePopState: jest.fn(),
};

export const useRouter = jest.fn(() => router);
export const { withRouter } = Router;
