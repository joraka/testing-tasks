const { add, divide } = require("../functions/math");
const { expect, test, describe } = require("@jest/globals");

//adition()
describe("add function", () => {
  test("returns correct sum for positive numbers", () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 1)).toBe(1);
    expect(add(1, 1)).toBe(2);
    expect(add(1, 2)).toBe(3);
    expect(add(2, 1)).toBe(3);
    expect(add(1234, 4321)).toBe(5555);
  });

  test("returns correct sum for negative numbers", () => {
    expect(add(0, -1)).toBe(-1);
    expect(add(-1, -1)).toBe(-2);
    expect(add(-1, -2)).toBe(-3);
    expect(add(-2, -1)).toBe(-3);
    expect(add(2, -1)).toBe(1);
    expect(add(-1234, -4321)).toBe(-5555);
  });
});

//disivion()
describe("divide function", () => {
  test("returns correct result for division of two numbers", () => {
    expect(divide(1, 1)).toBe(1);
    expect(divide(2, 2)).toBe(1);
    expect(divide(5, 2)).toBeCloseTo(2.5, 5);
    expect(divide(-6, 2)).toBe(-3);
    expect(divide(6, -2)).toBe(-3);
    expect(divide(-6, -2)).toBe(3);
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
    expect(() => divide(0, 0)).toThrow("Division by zero");
  });
});
