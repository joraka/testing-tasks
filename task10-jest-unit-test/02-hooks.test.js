const { expect, test, beforeEach, afterEach } = require("@jest/globals");

beforeEach(() => {
  console.log("BEFORE EACH: Setting up the test environment...");
});

afterEach(() => {
  console.log("AFTER EACH:up the test environment...");
});

test("Test 01", () => {
  console.log("Test 01: Running the test...");
});

test("Test 02", () => {
  console.log("Test 02: Running the test...");
});
