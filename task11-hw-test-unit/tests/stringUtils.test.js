const { expect, test, describe } = require("@jest/globals");
const { capitalize, containsSubstring } = require("../functions/stringUtils");

//capitalize()
describe("capitalize function", () => {
  test("returns capitalized word for all lowercase input", () => {
    expect(capitalize("test")).toBe("Test");
  });

  test("returns 'Test' for already-capitalized or mixed-case input", () => {
    expect(capitalize("Test")).toBe("Test");
    expect(capitalize("TEST")).toBe("Test");
    expect(capitalize("TesT")).toBe("Test");
    expect(capitalize("tESt")).toBe("Test");
  });

  test("returns empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });
});

//containsSubstring()
describe("containsSubstring function", () => {
  test("returns true when substring is present", () => {
    expect(containsSubstring("test", "st")).toBe(true);
    expect(containsSubstring("very long string", "long")).toBe(true);
    expect(containsSubstring("aaaaaaaaaabaaaaaaaaa", "b")).toBe(true);
  });

  test("returns false when substring is not present", () => {
    expect(containsSubstring("test", "xx")).toBe(false);
    expect(containsSubstring("123456789", "0")).toBe(false);
  });
});
