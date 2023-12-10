import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import createUser from "./createUser.js";

describe("Given function createUser", () => {
  describe("When function is called with non-empty email", () => {
    test("Then a string should be returned", () => {
      // Arrange
      const email = "zilong.zhan@gmail.com";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(typeof result).toBe("string");
    });
  });

  describe("When function is called with empty email", () => {
    test("Then a string should be returned", () => {
      // Arrange
      const email = "";

      // Act
      const result = createUser(email, onError, onSuccess);

      // Assert
      expect(typeof result).toBe("string");
    });
  });
});
