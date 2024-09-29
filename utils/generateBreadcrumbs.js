const generateBreadcrumbs = (path) => {
  // Remove any query parameters, as those aren't included in breadcrumbs
  const pathWithoutQuery = path.split(/(\?|\/\[).+/g)[0];

  // Break down the path between "/"s, removing empty entities Ex:"/my/nested/path" --> ["my", "nested", "path"]
  const pathNestedRoutes = pathWithoutQuery.split('/').filter((v) => v.length > 0);

  // Iterate over the list of nested route parts and build a "crumb" object for each one.
  return pathNestedRoutes.map((subpath, idx) => {
    const href = `/${pathNestedRoutes.slice(0, idx + 1).join('/')}`;
    const label = subpath.replace(/-/g, ' ');
    const last = idx === pathNestedRoutes.length - 1;

    return { href, label, last };
  });
};

export default generateBreadcrumbs;
