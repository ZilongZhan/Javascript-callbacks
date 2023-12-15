export const validateString = (value) => {
  if (value === undefined || typeof value !== "string" || value === "") {
    return false;
  }

  return true;
};
