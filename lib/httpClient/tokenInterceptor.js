import cookies from 'next-cookies';

const tokenInterceptor = (ctx) => (config) => {
  const { tokens } = cookies(ctx);

  // eslint-disable-next-line no-param-reassign
  config.headers.common.Authorization = tokens?.access ? `Bearer ${tokens.access}` : null;

  return config;
};

export default tokenInterceptor;
