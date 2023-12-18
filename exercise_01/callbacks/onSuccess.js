/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 * @description Returns array with words in the input string
 * @param {string} value
 * @returns {Array}
 */
const onSuccess = (value) => {
  return value.split(" ");
};

export default onSuccess;
