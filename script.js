const numberBtn = document.querySelectorAll('[data-number]');
const operandBtn = document.querySelectorAll('[data-operand]');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('#equals_btn');

let currentNum = '';
let currentOperand = '';
let firstNum;
let secondNum;

const handleNumClicked = num => {
  currentNum += num.innerHTML;
  updateScreen();
};

const handleOperandClicked = operand => {
  if (currentNum !== '') {
    if (firstNum === undefined) {
      firstNum = Number(currentNum);
    } else if (firstNum !== '') {
      secondNum = Number(currentNum);
    }
    currentOperand = operand.getAttribute('value');
    currentNum = '';
    updateScreen();
  }
};

//Equal
const equal = equalBtn.addEventListener('click', function () {
  if (currentNum !== '') {
    secondNum = Number(currentNum);
    if (currentOperand === '+') firstNum = add(firstNum, secondNum);
    else if (currentOperand === '-') firstNum = subtract(firstNum, secondNum);
    else if (currentOperand === '/') firstNum = divide(firstNum, secondNum);
    else if (currentOperand === '*') firstNum = multiply(firstNum, secondNum);

    currentNum = firstNum; // Convert the result to a string for display
    currentOperand = '';
    updateScreen();
  }
});

const updateScreen = () => {
  screen.innerHTML = currentNum + ' ' + currentOperand;
  console.log(currentNum);
};

numberBtn.forEach(function (num) {
  num.addEventListener('click', function () {
    handleNumClicked(num);
  });
});

operandBtn.forEach(function (operand) {
  operand.addEventListener('click', function () {
    handleOperandClicked(operand);
  });
});

// add
const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

// multiply
const multiply = function (firstNum, secondNum) {
  return firstNum * secondNum;
};

// divide
const divide = function (firstNum, secondNum) {
  return firstNum / secondNum;
};

// subtract
const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};
