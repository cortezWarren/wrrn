var result = 1;

var powe = function (num1, num2) {
  for (let index = 0; index < num2; index++) {
    result = result * num1;
  }
  return result;
};

module.exports = function (pows) {};
