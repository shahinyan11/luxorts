import serverCookie from 'cookie';
import clientCookie from 'component-cookie';

const setCookieIsomorphic = (ctx, name, value, options = { path: '/' }) => {
  if (ctx && typeof window === 'undefined') {
    ctx.res.setHeader('Set-Cookie', serverCookie.serialize(name, value, options));
  } else {
    clientCookie(name, value, options);
  }
};

export default setCookieIsomorphic;
