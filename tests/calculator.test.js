// const { default: expect } = require("expect");
const Calculator = require("../functions/Calculator");
const calc = new Calculator();

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers ", () => {
      expect(calc.add(6, 2)).toBe(8);
    });
  });
  describe("subtract", () => {
    test("subtract two numbers ", () => {
      expect(calc.subtract(6, 2)).toBe(4);
    });
  });
  describe("multiply", () => {
    test("multiply two numbers ", () => {
      expect(calc.multiply(6, 2)).toBe(12);
    });
  });
  describe("divide", () => {
    test("divide two numbers ", () => {
      expect(calc.divide(6, 2)).toBe(3);
    });
  });
});
