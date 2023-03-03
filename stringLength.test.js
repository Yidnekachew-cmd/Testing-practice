//
const stringLength = require("./stringLength");
const reverseString = require("./stringLength");
const Calculator = require("./stringLength");
const capitalize = require("./stringLength");

test("return string length", () => {
  expect(stringLength("yidne")).toBe(true);
});

test("return reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Capitalization check", () => {
  expect(capitalize("alemu")).toBe("Alemu");
});
