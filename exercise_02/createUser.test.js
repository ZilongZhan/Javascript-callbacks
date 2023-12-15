import { validateString } from "../helpers/validateString.js";
import createUser from "./createUser.js";

describe("Given createUser function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest
    .fn()
    .mockImplementation(() => "Error: user not created");
  const mockOnSuccess = jest
    .fn()
    .mockImplementation(
      (email) => `User with email ${email} has been correctly created`
    );

  test("When email is empty Then expected error string should be returned", () => {
    //Arrange
    const email = "";

    //Act
    const result = createUser(email, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe("Error: user not created");
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When email is fulfilled and random number is less than 0.5 Then expected error string should be returned", () => {
    //Arrange
    const email = "johndoe@mai.com";
    const spyOnMathRandom = jest.spyOn(Math, "random");
    spyOnMathRandom.mockReturnValueOnce(0.4);

    //Act
    const result = createUser(email, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe("Error: user not created");
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test(" When email is fulfilled and random number is equal than 0.5 Then expected success string should be returned", () => {
    //Arrange
    const email = "johndoe@mail.com";
    const spyOnMathRandom = jest.spyOn(Math, "random");
    spyOnMathRandom.mockReturnValueOnce(0.5);

    //Act
    const result = createUser(email, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe(`User with email ${email} has been correctly created`);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
  });

  test(" When email is fulfilled and random number is greater than 0.5 Then expected success string should be returned", () => {
    //Arrange
    const email = "johndoe@mail.com";
    const spyOnMathRandom = jest.spyOn(Math, "random");
    spyOnMathRandom.mockReturnValueOnce(0.6);

    //Act
    const result = createUser(email, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe(`User with email ${email} has been correctly created`);
    expect(mockOnError).not.toHaveBeenCalled();
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
  });
});
