import onError from "./callbacks/onError";
import onSuccess from "./callbacks/onSuccess";
import transformStringToArray from "./transformStringToCollection";

describe("Given function transformStringToArray", () => {
  describe("When function is called with value type string & not empty", () => {
    test("Then a non empty array should be returned", () => {
      // Arrange
      const value = "Hello World";

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result.length).toBe(2);
    });
  });

  describe("When function is called with value type not string or empty", () => {
    test("Then an empty array should be returned", () => {
      // Arrange
      const value = "";

      // Act
      const result = transformStringToArray(value, onError, onSuccess);

      // Assert
      expect(result.length).toBe(0);
    });
  });
});
