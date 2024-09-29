import React from 'react';
import App from 'next/app';
import { IntlProvider } from 'react-intl-redux';
import { ReactReduxContext } from 'react-redux';
import cookies from 'next-cookies';

// utils
import { mountInterceptors } from 'lib/httpClient';

// state
import wrapper from 'state/store';
import { userSignInSuccess } from 'state/concepts/session/actions';

// components
import Meta from 'views/layouts/Meta';
import ModalRoot from 'views/ModalRoot';
import SvgRootComponent from 'views/stubs/shared/SvgRoot';
import FlashMessagesRoot from 'views/FlashMessagesRoot';

import 'assets/styles/application.scss';

class Application extends App {
  static contextType = ReactReduxContext;

  static getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
    const { Component, ctx } = context;

    const isServer = Boolean(ctx.req);

    ctx.store = store;

    if (isServer) {
      // preparing axios instance
      mountInterceptors(ctx);
    }

    // storing current user's data in state
    const { currentUser: userInStore } = store.getState().session;
    const { currentUser } = cookies(ctx);

    if (currentUser && !userInStore) {
      store.dispatch(userSignInSuccess(currentUser));
    }

    // run getInitialProps for page and layout components
    const layoutInitialProps = Component.Layout?.getInitialProps
      ? await Component.Layout.getInitialProps(ctx)
      : {};
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // wait for all logics to finish when doing SSR
    if (isServer) {
      await store.logicMiddleware.whenComplete();
    }

    return { pageProps, layoutInitialProps };
  });

  componentDidMount() {
    const { store } = this.context;

    mountInterceptors({ store });
  }

  render = () => {
    const { Component, pageProps, layoutInitialProps } = this.props;
    const Layout = Component.Layout || React.Fragment;

    return (
      <IntlProvider>
        <Meta />
        <Layout {...layoutInitialProps} {...Component.layoutProps}>
          <Component {...pageProps} />
        </Layout>
        <SvgRootComponent />
        <ModalRoot />
        <FlashMessagesRoot />
      </IntlProvider>
    );
  };
}

export default wrapper.withRedux(Application);
