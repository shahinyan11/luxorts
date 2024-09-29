import disableHtmlElementsByClassName from '../disableHtmlElementsByClassName';

describe('disableHtmlElementsByClassName util', () => {
  const elements = [{ disabled: false }, { disabled: false }];

  Object.defineProperty(document, 'getElementsByClassName', {
    value: jest.fn(() => elements),
  });

  it('should sets disable attribute to true for all entities by className', () => {
    disableHtmlElementsByClassName('class-name');

    expect(elements).toEqual([{ disabled: true }, { disabled: true }]);
  });
});
