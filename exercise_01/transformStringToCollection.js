import { validateString } from "../helpers/validateString";

/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */

const transformStringToArray = (value, onError, onSuccess) => {
  if (validateString(value)) {
    return onSuccess(value);
  }

  return onError();
};

export default transformStringToArray;
