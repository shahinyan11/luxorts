import generateBreadcrumbs from 'utils/generateBreadcrumbs';

it('generateBreadcrumbs util should returns array of crumbs', () => {
  const path = '/account-settings/personal-information';

  expect(generateBreadcrumbs(path)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        href: '/account-settings',
        label: 'account settings',
        last: false,
      }),
      expect.objectContaining({
        href: '/account-settings/personal-information',
        label: 'personal information',
        last: true,
      }),
    ]),
  );
});
