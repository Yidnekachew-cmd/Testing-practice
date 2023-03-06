function stringLength(string) {
  if (string.length > 0 && string.length < 10) {
    return true;
  } else {
    return "The test is Error!";
  }
}

module.exports = stringLength;
