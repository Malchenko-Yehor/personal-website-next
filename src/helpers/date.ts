/** Parsing date in mm/yyyy format*/
export const getFormattedDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const paddedMonth = month.toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${paddedMonth}/${year}`;
};