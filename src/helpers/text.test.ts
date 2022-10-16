import { textToKebabCase } from './text';

describe('textToKebabCase', () => {
  test('Replaces whitespaces between words with "-" and makes text lowercase', () => {
    const text = 'Lorem Ipsum Dolor Sit Amet';
    const expectedText = 'lorem-ipsum-dolor-sit-amet';
    const kebabCaseText = textToKebabCase(text);

    expect(kebabCaseText).toBe(expectedText);
  });

  test('Trims whitespace', () => {
    const text = '    Lorem Ipsum  ';
    const expectedText = 'lorem-ipsum';
    const kebabCaseText = textToKebabCase(text);

    expect(kebabCaseText).toBe(expectedText);
  });

  test('On epmty string passed returns empty string', () => {
    const text = '';
    const expectedText = '';
    const kebabCaseText = textToKebabCase(text);

    expect(kebabCaseText).toBe(expectedText);
  });

  test('Works on one word', () => {
    const text = 'Lorem';
    const expectedText = 'lorem';
    const kebabCaseText = textToKebabCase(text);

    expect(kebabCaseText).toBe(expectedText);
  });

  test('On whitespace only returns empty string', () => {
    const text = '    ';
    const expectedText = '';
    const kebabCaseText = textToKebabCase(text);

    expect(kebabCaseText).toBe(expectedText);
  });
});
