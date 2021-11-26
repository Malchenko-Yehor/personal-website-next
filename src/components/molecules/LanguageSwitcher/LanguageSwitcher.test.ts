import { StrapiFile } from 'api/types';
import { getFlagTranslate, getLanguages, getSelectedLanguageIcon } from './LanguageSwitcher'

const locales = ["en", "pl", "uk", "ru"];

const mediaFiles = [
  {
    "name": "en.svg",
    "url": "https://res.cloudinary.com/do10o43lg/image/upload/v1633636001/en_62749d99f1.svg"
  },
  {
    "name": "pl.svg",
    "url": "https://res.cloudinary.com/do10o43lg/image/upload/v1633636001/pl_77f520e8ec.svg"
  },
  {
    "name": "ru.svg",
    "url": "https://res.cloudinary.com/do10o43lg/image/upload/v1633636001/ru_7fd8ce0ece.svg"
  },
  {
    "name": "uk.svg",
    "url": "https://res.cloudinary.com/do10o43lg/image/upload/v1633636001/uk_c009274972.svg"
  }
] as StrapiFile[];

const englishLanguage = {
  locale: 'en',
  icon: {
    alt: 'en flag',
    src: 'https://res.cloudinary.com/do10o43lg/image/upload/v1633636001/en_62749d99f1.svg'
  }
};


describe('getFlagTranslate()', () => {
  test('returns coordinates multiplied by distance and "y" has inverted value', () => {
    const coordinates = { x: 0.5, y: -1 };
    const { x, y } = getFlagTranslate(coordinates, 20);

    expect(x).toBe(10);
    expect(y).toBe(20);
  });

  test('works with zero x and y values', () => {
    const coordinates = { x: 0, y: 0 };
    const { x, y } = getFlagTranslate(coordinates, 20);

    expect(x).toBe(0);
    expect(y).toBe(-0);
  });
});

describe('getLanguages()', () => {
  test('maps locales to languages with icons', () => {
    const languages = getLanguages(locales, mediaFiles);
    const firstLanguage = languages[0];

    expect(firstLanguage).toStrictEqual(englishLanguage);
  });
})

describe('getSelectedLanguageIcon()', () => {
  test('return right icon for selected locale', () => {
    const languages = getLanguages(locales, mediaFiles);
    const selectedLanguageIcon = getSelectedLanguageIcon(languages, 'en');

    expect(selectedLanguageIcon).toStrictEqual(englishLanguage.icon);
  });
})
