export default function stringLength(value) {
  // eslint-disable-next-line func-names
  return this.test('stringLength', function (string) {
    if (!string) {
      return true;
    }

    return string.length !== value
      ? this.createError({
          message: {
            id: 'validations.stringLength',
            values: {
              value,
            },
          },
        })
      : true;
  });
}
