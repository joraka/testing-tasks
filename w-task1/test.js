import {
  isEven,
  isEmptyString,
  checkNumber,
  startsWithCapital,
  maxOfTwo,
  getFirstElement,
  arrayLength,
  hasElements,
  toLowerCase,
  joinStrings,
  areEqualIgnoreCase,
  containsNumber,
  countOccurrences,
  filterGreaterThanTen,
  filterLongWords,
  joinArray,
  reverseArray,
  isInteger,
  endsWithWord,
  squareRoot,
} from "./script.js";
import { assert, expect } from "chai";

describe("JavaScript Testing Tasks", () => {
  describe("isEven", () => {
    it("should return true for even numbers", () => {
      expect(isEven(4)).to.equal(true);
    });

    it("should return true for odd numbers", () => {
      expect(isEven(5)).to.equal(false);
    });

    it("should return true for zero", () => {
      expect(isEven(0)).to.equal(true);
    });
  });

  describe("isEmptyString", () => {
    it("should return true when string is empty", () => {
      expect(isEmptyString("")).to.equal(true);
    });

    it("should return false when string is not empty", () => {
      expect(isEmptyString("something")).to.equal(false);
    });
  });

  describe("checkNumber", () => {
    it('should return "positive" when number is positive', () => {
      expect(checkNumber(1)).to.equal("positive");
    });

    it('should return "negative" when number is negative', () => {
      expect(checkNumber(-1)).to.equal("negative");
    });

    it('should return "zero" when number is zero', () => {
      expect(checkNumber(0)).to.equal("zero");
    });
  });

  describe("startsWithCapital", () => {
    it(`should return true for "Kebab"`, () => {
      expect(startsWithCapital("Kebab")).to.equal(true);
    });

    it(`should return true for "PIZZA"`, () => {
      expect(startsWithCapital("PIZZA")).to.equal(true);
    });

    it(`should return false for "bURGER"`, () => {
      expect(startsWithCapital("bURGER")).to.equal(false);
    });

    it(`should return false for "potato"`, () => {
      expect(startsWithCapital("potato")).to.equal(false);
    });

    it(`should return false for ""`, () => {
      expect(startsWithCapital("")).to.equal(false);
    });
  });

  describe("maxOfTwo", () => {
    it(`should return 2 when a = "1", b = "2"`, () => {
      expect(maxOfTwo(1, 2)).to.equal(2);
    });

    it(`should return 55 when a = -55, b = 55`, () => {
      expect(maxOfTwo(-55, 55)).to.equal(55);
    });

    it(`should return 55 when a = 55, b = -55`, () => {
      expect(maxOfTwo(55, -55)).to.equal(55);
    });

    it(`should return 55 when a = 55, b = 55`, () => {
      expect(maxOfTwo(55, 55)).to.equal(55);
    });
  });

  describe("getFirstElement", () => {
    it(`should return 1 when array is [1,2,3]`, () => {
      expect(getFirstElement([1, 2, 3])).to.equal(1);
    });

    it(`should return "a" when array is ["a","b","c"]`, () => {
      expect(getFirstElement(["a", "b", "c"])).to.equal("a");
    });

    it(`should return true when array is [true,false,0]`, () => {
      expect(getFirstElement([true, false, 0])).to.equal(true);
    });
  });

  describe("arrayLength", () => {
    it(`should 1 when array is ["a"]`, () => {
      expect(arrayLength(["a"])).to.equal(1);
    });

    it(`should 0 when array is []`, () => {
      expect(arrayLength([])).to.equal(0);
    });
  });

  describe("hasElements", () => {
    it(`should true when array is ["a"]`, () => {
      expect(hasElements(["a"])).to.equal(true);
    });

    it(`should false when array is []`, () => {
      expect(hasElements([])).to.equal(false);
    });
  });

  describe("toLowerCase", () => {
    it(`should return "abcd" for "abcd"`, () => {
      expect(toLowerCase("abcd")).to.equal("abcd");
    });

    it(`should return "abcd" for "ABCD"`, () => {
      expect(toLowerCase("ABCD")).to.equal("abcd");
    });

    it(`should return "abcd" for "AbCd"`, () => {
      expect(toLowerCase("AbCd")).to.equal("abcd");
    });

    it(`should return "" for ""`, () => {
      expect(toLowerCase("")).to.equal("");
    });
  });

  describe("joinStrings", () => {
    it(`should return "abcd" when a = "ab", b = "cd"`, () => {
      expect(joinStrings("ab", "cd")).to.equal("abcd");
    });

    it(`should return "AB" when a = "AB", b = ""`, () => {
      expect(joinStrings("AB", "")).to.equal("AB");
    });

    it(`should return "AB" when a = "", b = "AB"`, () => {
      expect(joinStrings("", "AB")).to.equal("AB");
    });

    it(`should return "" when a = "", b = ""`, () => {
      expect(joinStrings("", "")).to.equal("");
    });

    it(`should return "A B" when a = "A ", b = "B"`, () => {
      expect(joinStrings("", "")).to.equal("");
    });
  });

  describe("areEqualIgnoreCase", () => {
    it(`should return true when a = "ab", b = "AB"`, () => {
      expect(areEqualIgnoreCase("ab", "AB")).to.equal(true);
    });
    it(`should return true when a = "kebabas", b = "KeBabAs"`, () => {
      expect(areEqualIgnoreCase("kebabas", "KeBabAs")).to.equal(true);
    });
  });

  describe("containsNumber", () => {
    it(`should return true when a = "[10, 1, 11]", b = "1"`, () => {
      expect(containsNumber([10, 1, 11], 1)).to.equal(true);
    });

    it(`should return false when a = "[10, 100, 11]", b = "1"`, () => {
      expect(containsNumber([10, 100, 11], 1)).to.equal(false);
    });

    it(`should return false when a = "["a", "b", "c"]", b = "1"`, () => {
      expect(containsNumber(["a", "b", "c"], 1)).to.equal(false);
    });

    it(`should return false when a = "["a", "b", "1"]", b = "1"`, () => {
      expect(containsNumber(["a", "b", "1"], 1)).to.equal(false);
    });
  });

  describe("countOccurrences", () => {
    it(`should return one occurance"`, () => {
      expect(countOccurrences([0, 1, 2, 3, 4, 5], 5)).to.equal(1);
    });

    it(`should return four occurances`, () => {
      expect(countOccurrences([5, 0, 1, 5, 2, 5, 3, 4, 5], 5)).to.equal(4);
    });

    it(`should return zero occurances`, () => {
      expect(countOccurrences([-1, 0, 1, -1, 2, -1, 3, 4, -1], 5)).to.equal(0);
    });
  });

  describe("filterGreaterThanTen", () => {
    it(`should return [11, 12, 13] when a = [1, 2, 3, 10, 11, 12, 13]`, () => {
      expect(filterGreaterThanTen([1, 2, 3, 10, 11, 12, 13])).to.deep.equal([11, 12, 13]);
    });
  });

  describe("filterLongWords", () => {
    it(`should return array of words longer than 3 letters`, () => {
      expect(filterLongWords(["ab", "abc", "abcd", "abcde"])).to.deep.equal(["abcd", "abcde"]);
    });
  });

  describe("joinArray", () => {
    it(`should return joined array`, () => {
      expect(joinArray(["ab", "cd"])).to.be.equal("ab,cd");
    });
  });

  describe("reverseArray", () => {
    it(`should return when array is reversed`, () => {
      expect(reverseArray(["ab", "cd"])).to.deep.equal(["cd", "ab"]);
    });
  });

  describe("isInteger", () => {
    it(`should return true for integer`, () => {
      expect(isInteger(1)).to.equal(true);
    });

    it(`should return false for floating number`, () => {
      expect(isInteger(1.11111)).to.equal(false);
    });
  });

  describe("endsWithWord", () => {
    it(`should return true when last word matches`, () => {
      expect(endsWithWord("bob marley", "marley")).to.equal(true);
    });

    it(`should return false when last word doesn't match`, () => {
      expect(endsWithWord("bob marley darley", "marley")).to.equal(false);
    });
  });

  describe("squareRoot", () => {
    it("should return square root of 4", () => {
      expect(squareRoot(4)).to.equal(2);
    });
  });
});
