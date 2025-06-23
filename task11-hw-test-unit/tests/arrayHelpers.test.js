const { expect, test, describe } = require("@jest/globals");
const { findMax, removeDuplicates } = require("../functions/arrayHelpers");

//findMax()
describe("findMax function", () => {
  test("returns the only element for single-element array", () => {
    expect(findMax([1])).toBe(1);
  });

  test("returns correct max for all identical elements", () => {
    expect(findMax([1, 1, 1])).toBe(1);
  });

  test("returns max value for positive numbers", () => {
    expect(findMax([1, 2, 3])).toBe(3);
    expect(findMax([3, 2, 1])).toBe(3);
    expect(findMax([1, 1, 3, 1, 1])).toBe(3);
  });

  test("returns max value for mixed positive and negative numbers", () => {
    expect(findMax([-1, -2, 3])).toBe(3);
    expect(findMax([-1, -2, 2, 4, 5, 8, -10, -20, 30, 3])).toBe(30);
    expect(findMax([-3, -2, -1])).toBe(-1);
    expect(findMax([-3, -2, -3])).toBe(-2);
  });

  test("returns null for empty array", () => {
    expect(findMax([])).toBeNull();
  });
});

// removeDuplicates();
describe("removeDuplicates function", () => {
  test("returns same array for single-element array", () => {
    expect(removeDuplicates([1])).toEqual([1]);
  });

  test("removes duplicates from array with all identical elements", () => {
    expect(removeDuplicates([1, 1])).toEqual([1]);
  });

  test("removes duplicates from array with some duplicates", () => {
    expect(removeDuplicates([1, 1, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates([3, 2, 1, 4, 5, 6, 6, 6, 1])).toEqual([3, 2, 1, 4, 5, 6]);
  });

  test("returns same array when there are no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
