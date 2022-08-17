function stringL(string) {
  if (string.length <= 1) {
    throw new Error('Should be 1 character and more ');
  } else if (string.length >= 10) {
    throw new Error('Should  not be longer 10 character');
  }
  return string.length;
}
module.exports = stringL;
