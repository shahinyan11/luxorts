const buildTitles = (content = '') => {
  const titles = [];
  let htmlString = content;

  const tagContentRegexp = /[A-Z][^<][^/]+[a-z]/;
  const fullTagRegexp = /<h[2|3]>(.+?)<\/h[2|3]>/g;

  const matchArr = htmlString.match(fullTagRegexp);

  matchArr?.forEach((tag) => {
    const text = tag.match(tagContentRegexp)?.[0];
    const id = htmlString.indexOf(tag);

    // add "id" on tag
    const tagWithId = tag.replace('>', ` id="${id}">`);

    // replace old tag with new tag which have an "id"
    htmlString = htmlString.replace(tag, tagWithId);

    // add h2 titles in array
    if (tag.includes('<h2>')) {
      titles.push({
        id,
        text,
        children: [],
      });
    }

    // add h3 subtitles in to parent children array
    if (tag.includes('<h3>')) {
      titles[titles.length - 1]?.children.push({
        id,
        text,
      });
    }
  });

  return {
    htmlString,
    titles,
  };
};

export default buildTitles;
