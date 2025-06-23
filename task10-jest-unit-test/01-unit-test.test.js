const sum = require("./sum.js");
const { expect, test } = require("@jest/globals");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Object assertion", () => {
  const object = { one: 1 };
  object["two"] = 2;
  expect(object).toEqual({ one: 1, two: 2 });
});

test("Null assertion", () => {
  const _null = null;
  expect(_null).toBeNull();
  expect(_null).toBeDefined();
  expect(_null).not.toBeUndefined();
  expect(_null).not.toBeTruthy();
  expect(_null).toBeFalsy();
});

test("Zero assertion", () => {
  const zero = 0;

  expect(zero).not.toBeNull();
  expect(zero).toBeFalsy();
});

test("there is no letter I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch("stop"); // case sensitive
  expect("Christoph").toMatch(/stop/i); // case insensitive
  expect("ChriSTOPh").toMatch(/stop/i); // case insensitive
});

const shoppingList = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
  expect(shoppingList).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  // expect(() => compileAndroidCode()).toThrow();
  // expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  // expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});

test("Array length", () => {
  const arr = [1, 2, 3];
  expect(arr).toHaveLength(3);
});

test("Number comparisons", () => {
  expect(10).toBeGreaterThan(5);
  expect(5).toBeLessThanOrEqual(5);
});

test("Promise resolves", async () => {
  await expect(Promise.resolve("data")).resolves.toBe("data");
});

test("Promise rejects", async () => {
  await expect(Promise.reject(new Error("fail"))).rejects.toThrow("fail");
});

test("Array contains object", () => {
  const arr = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  expect(arr).toContainEqual({ id: 2, name: "Bob" });
});

test("Floating point addition", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});
