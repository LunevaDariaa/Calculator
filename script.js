const numberBtn = document.querySelectorAll('[data-number]');
const operandBtn = document.querySelectorAll('[data-operand]');

const screen = document.querySelector('.screen');
//screen.innerHTML = '';

let currentNum = '';
numberBtn.forEach(function (num) {
  num.addEventListener('click', function () {
    currentNum += num.innerHTML;
    screen.innerHTML = currentNum;
    console.log(num.innerHTML);
    console.log(currentNum);
  });
});

operandBtn.forEach(function (operand) {
  operand.addEventListener('click', function () {
    if (operand.toString() === '-') {
      console.log(typeof toString(operand));
    }
  });
});

//add
const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

//multiply
const multiply = function (firstNum, secondNum) {
  return firstNum * secondNum;
};

//divide
const divide = function (firstNum, secondNum) {
  return firstNum / secondNum;
};

//substract
const substract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};
