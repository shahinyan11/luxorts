import * as reactRedux from 'react-redux';

export const dispatch = jest.fn();

export const store = {
  logicMiddleware: {
    whenComplete: jest.fn((fn) => fn()),
  },
  dispatch,
  getState: jest.fn(),
};

export const useDispatch = jest.fn(() => dispatch);
export const useSelector = jest.fn((fn) => fn());
export const useStore = jest.fn(() => store);
export const { Provider } = reactRedux;
export const { connect } = reactRedux;
