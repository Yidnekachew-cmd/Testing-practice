const { default: expect } = require("expect");
const capitalize = require("../functions/capitalize");

test("capitalize the first character of the string", () => {
  expect(capitalize("yidne")).toBe("Yidne");
});
