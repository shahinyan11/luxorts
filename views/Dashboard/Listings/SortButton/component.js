import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { SORT_DIRECTIONS } from 'constants';

import SvgIcon from 'views/shared/SvgIcon';

const SortButton = ({ onClickHandler, text, sort, sortKey }) => (
  <button onClick={onClickHandler} type="button" className="d-flex">
    <FormattedMessage {...text} />
    <SvgIcon
      className={classNames({
        'rotate-180': sort.sortKey === sortKey && sort.direction === SORT_DIRECTIONS.ASCEND,
        'icon--color-primary': sort.sortKey === sortKey,
      })}
      icon="arrow-down"
    />
  </button>
);

SortButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.shape().isRequired,
  sort: PropTypes.shape().isRequired,
  sortKey: PropTypes.string.isRequired,
};

export default SortButton;
