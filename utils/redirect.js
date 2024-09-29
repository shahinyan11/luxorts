import Router from 'next/router';

const redirect = (destination, ctx) => {
  // check if server-side render
  if (ctx && ctx.res) {
    ctx.res.writeHead(302, {
      Location: destination,
    });
    ctx.res.end();
  } else {
    Router.push(destination);
  }
};

export default redirect;
