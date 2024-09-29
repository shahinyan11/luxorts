import PropTypes from 'prop-types';
import Link from 'next/link';

import SvgIcon from 'views/shared/SvgIcon';

const BreadcrumbItem = ({ label, href, last }) => (
  <li className="breadcrumbs__item">
    <Link href={href}>
      <a className="breadcrumbs__link">{label}</a>
    </Link>
    {!last && <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />}
  </li>
);

BreadcrumbItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
};

export default BreadcrumbItem;
