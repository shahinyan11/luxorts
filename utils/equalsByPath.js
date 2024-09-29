import { path } from 'ramda';

const equalsByPath = (value, pathToProp) => (item) => path(pathToProp, item) === value;

export default equalsByPath;
