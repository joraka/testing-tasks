const { expect, describe, it } = require("@jest/globals");
const { isAdult, getFullName } = require("../functions/userService");

//isAdult()
describe("isAdult function", () => {
  it("returns true for user age 18 or older", () => {
    expect(isAdult({ age: 18 })).toBe(true);
    expect(isAdult({ age: 19 })).toBe(true);
    expect(isAdult({ age: 100 })).toBe(true);
  });

  it("returns false for user age under 18", () => {
    expect(isAdult({ age: 17 })).toBe(false);
    expect(isAdult({ age: 13 })).toBe(false);
    expect(isAdult({ age: 1 })).toBe(false);
  });
});

//getFullName()
describe("getFullName function", () => {
  it("returns full name for valid first and last name", () => {
    expect(getFullName({ firstName: "Bob", lastName: "Marley" })).toBe("Bob Marley");
    expect(getFullName({ firstName: "Arnold", lastName: "Schwarzenegger" })).toBe(
      "Arnold Schwarzenegger"
    );
  });

  it("returns correct result for empty first or last name", () => {
    expect(getFullName({ firstName: "", lastName: "Marley" })).toBe(" Marley");
    expect(getFullName({ firstName: "Bob", lastName: "" })).toBe("Bob ");
    expect(getFullName({ firstName: "", lastName: "" })).toBe(" ");
  });
});
