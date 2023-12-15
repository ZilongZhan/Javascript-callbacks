import { validateString } from "../helpers/validateString";
import transformStringToArray from "./transformStringToCollection";

describe("Given function transformStringToArray", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest.fn().mockImplementation(() => []);
  const mockOnSuccess = jest
    .fn()
    .mockImplementation((value) => value.split(" "));

  test("When function is called with value empty string then an empty array should be returned", () => {
    // Arrange
    const value = "";

    // Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    // Assert
    expect(mockOnError).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(0);
  });

  test("When function is called with value type number then an empty array should be returned", () => {
    // Arrange
    const value = 1;

    // Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    // Assert
    expect(mockOnError).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(0);
  });

  test("When function is called with value type array then an empty array should be returned", () => {
    // Arrange
    const value = [1, 2, 3];

    // Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    // Assert
    expect(mockOnError).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(0);
  });

  test("When function is called with value type boolean then an empty array should be returned", () => {
    // Arrange
    const value = false;

    // Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    // Assert
    expect(mockOnError).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(0);
  });

  test("When function is called with value type string & not empty then a non empty array should be returned", () => {
    // Arrange
    const value = "Hello World";

    // Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    // Assert
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(result.length).toBe(2);
  });
});
