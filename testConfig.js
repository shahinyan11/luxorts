/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { format } from 'util';

const { error } = global.console;

/* istanbul ignore next */
global.console.error = (...args) => {
  error(...args);
  throw new Error(format(...args));
};

/* istanbul ignore next */
console.warn = (warning) => {
  throw new Error(warning);
};

export default configure({ adapter: new Adapter() });
