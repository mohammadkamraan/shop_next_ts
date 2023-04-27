type FirstLetterCapitalizer = (string: string) => string;

export const firstLetterCapitalizer: FirstLetterCapitalizer = string => {
  return string.charAt(0).toUpperCase() + string?.slice(1);
};
