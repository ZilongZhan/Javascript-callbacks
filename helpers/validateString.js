/**
 * @description Validates input string and returns a boolean
 * @param {string} value
 * @returns {boolean}
 */
export const validateString = (value) => {
  if (value === undefined || typeof value !== "string" || value === "") {
    return false;
  }

  return true;
};
