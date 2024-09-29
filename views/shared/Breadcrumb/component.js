import { useRouter } from 'next/router';

import generateBreadcrumbs from 'utils/generateBreadcrumbs';

import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = () => {
  const router = useRouter();
  const crumbList = generateBreadcrumbs(router.route);

  return (
    <ul className="breadcrumbs mt-32 mb-16">
      {crumbList.map((value) => (
        <BreadcrumbItem key={value.label} {...value} />
      ))}
    </ul>
  );
};

export default Breadcrumb;
