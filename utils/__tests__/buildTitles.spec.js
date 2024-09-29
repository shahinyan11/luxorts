import buildTitles from 'utils/buildTitles';

describe('buildTitles()', () => {
  it('When h2 tag is exists in string', () => {
    const content = '<h2>Text</h2>';
    const idH2 = content.indexOf('<h2>');

    expect(buildTitles(content)).toStrictEqual({
      titles: [{ id: idH2, text: 'Text', children: [] }],
      htmlString: `<h2 id="${idH2}">Text</h2>`,
    });
  });

  it('When h2 and h3 tags are exists in string', () => {
    const content = '<h2>Text</h2><h3>Text</h3>';
    const idH2 = content.indexOf('<h2>');

    const replacedContent = `<h2 id="${idH2}">Text</h2><h3>Text</h3>`;
    const idH3 = replacedContent.indexOf('<h3>');

    expect(buildTitles(content)).toStrictEqual({
      titles: [
        {
          id: idH2,
          text: 'Text',
          children: [
            {
              id: idH3,
              text: 'Text',
            },
          ],
        },
      ],
      htmlString: `<h2 id="${idH2}">Text</h2><h3 id="${idH3}">Text</h3>`,
    });
  });

  it('When there is no h2 tag in string', () => {
    const content = '';

    expect(buildTitles(content)).toStrictEqual({
      titles: [],
      htmlString: '',
    });
  });
});
