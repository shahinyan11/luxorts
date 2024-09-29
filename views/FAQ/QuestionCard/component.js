import Link from 'next/link';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import SvgIcon from 'views/shared/SvgIcon';

const QuestionCard = ({ title, text }) => (
  <li className="question__item">
    <h3 className="question__title">
      <FormattedMessage {...title} />
    </h3>
    <p className="question__text">
      <FormattedMessage {...text} />
    </p>
    <Link href="#">
      <a className="question__link main-text-btn">
        <SvgIcon icon="arrow-right" className="icon-left" />
        <FormattedMessage id="shared.readMore" />
      </a>
    </Link>
  </li>
);

QuestionCard.defaultProps = {
  title: undefined,
  text: undefined,
};

QuestionCard.propTypes = {
  title: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  text: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
};

export default QuestionCard;
