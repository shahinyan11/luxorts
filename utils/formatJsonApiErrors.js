import { pipe, map, forEach, replace, split, assocPath, mergeDeepWith, is, isNil } from 'ramda';
import { camelCase } from 'lodash';

const formatErrorObject = ({ source: { pointer }, detail }) => {
  const attributes = pipe(replace('/data/attributes/', ''), split('.'), map(camelCase))(pointer);

  return assocPath(attributes, detail, {});
};

const formatJsonApiErrors = (errors) => {
  if (isNil(errors)) {
    return { base: 'Unknown error' };
  }

  let result = {};

  forEach((error) => {
    const formattedError = formatErrorObject(error);
    result = mergeDeepWith(
      (left, right) => (is(String)(left) ? `${left}. ${right}` : left),
      result,
      formattedError,
    );
  }, errors);

  return result;
};

export default formatJsonApiErrors;
