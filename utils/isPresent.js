import { isNil, isEmpty } from 'ramda';

const isPresent = (data) => !isNil(data) && !isEmpty(data);

export default isPresent;
