import { validateString } from "./validateString.js";

describe("Given function validateString", () => {
  test("When value is undefined then false boolean should be returned", () => {
    // Arrange
    const value = undefined;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test("When value is number then false boolean should be returned", () => {
    // Arrange
    const value = 1;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test("When value is array then false boolean should be returned", () => {
    // Arrange
    const value = [1, 2, 3];

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test("When value is boolean then false boolean should be returned", () => {
    // Arrange
    const value = false;

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test("When value is object then false boolean should be returned", () => {
    // Arrange
    const value = {myObject: "Hello"};

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test("When value is an empty string then false boolean should be returned", () => {
    // Arrange
    const value = "";

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(false);
  });

  test("When value is fulfilled string then false boolean should be returned", () => {
    // Arrange
    const value = "Hello World";

    // Act
    const result = validateString(value);

    // Assert
    expect(result).toBe(true);
  });
});
