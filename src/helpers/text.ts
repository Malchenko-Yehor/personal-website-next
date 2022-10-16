export const textToKebabCase = (text: string) => {
  return text.trim().toLocaleLowerCase().replace(/\s/g, '-');
};
