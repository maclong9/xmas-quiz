/**
 * Combines multiple class names into a single string.
 * Filters out any falsy values from the provided class names.
 */
export const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Shuffles the elements of an array in place using the Fisher-Yates algorithm.
 */
export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};