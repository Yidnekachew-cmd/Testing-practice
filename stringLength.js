// function to identify a string length between 1-9
function stringLength(string) {
  if (string.length > 0 && string.length < 10) {
    return true;
  } else {
    return "This is an error";
  }
}

// function to reverse a string
function reverseString(string) {
  return string.split("").reverse().join("");
}

// function to capitalize first letter of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase();
}

// exporting the functions
module.exports = stringLength;
module.exports = reverseString;
module.exports = capitalize;
