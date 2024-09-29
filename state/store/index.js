import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';

import buildHttpClient from 'lib/httpClient';
import conceptsOperations from 'state/concepts/operationsRoot';
import flashMessagesOperations from 'state/flash-messages/operations';
import rootReducer from 'state/store/reducer';

const operations = [...conceptsOperations, ...flashMessagesOperations];

const makeStore = () => {
  const operationsDependencies = {
    httpClient: buildHttpClient(),
  };

  const logicMiddleware = createLogicMiddleware(operations, operationsDependencies);
  const middlewares = applyMiddleware(logicMiddleware);
  const enhancer = composeWithDevTools(middlewares);

  const store = createStore(rootReducer, enhancer);
  store.logicMiddleware = logicMiddleware;
  store.httpClient = operationsDependencies.httpClient;
  store.persistor = persistStore(store);

  return store;
};

export default createWrapper(makeStore);
