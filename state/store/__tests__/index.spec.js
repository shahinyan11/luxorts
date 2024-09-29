import wrapper from '../index';

it('creates wrapper', () => {
  expect(wrapper).toEqual(
    expect.objectContaining({
      getServerSideProps: expect.any(Function),
      getStaticProps: expect.any(Function),
      withRedux: expect.any(Function),
    }),
  );
});

it('wrapper makes store', () => {
  let expectedStore;
  const Component = () => <>Mock Component</>;
  Component.getInitialProps = wrapper.getInitialPageProps((store) => {
    expectedStore = store;
  });
  const Wrapper = wrapper.withRedux(Component);
  Wrapper.getInitialProps({});

  expect(expectedStore).toEqual(
    expect.objectContaining({
      dispatch: expect.any(Function),
      subscribe: expect.any(Function),
      getState: expect.any(Function),
      replaceReducer: expect.any(Function),
      logicMiddleware: expect.any(Function),
      httpClient: expect.any(Function),
    }),
  );

  expect(expectedStore.logicMiddleware).toEqual(
    expect.objectContaining({
      whenComplete: expect.any(Function),
    }),
  );

  expect(expectedStore.httpClient).toEqual(
    expect.objectContaining({
      request: expect.any(Function),
      get: expect.any(Function),
      post: expect.any(Function),
      put: expect.any(Function),
      patch: expect.any(Function),
      delete: expect.any(Function),
      options: expect.any(Function),
      head: expect.any(Function),
    }),
  );
});
