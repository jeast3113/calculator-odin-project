// -- Create DOM variables
const body = document.querySelector("body");
console.log(body);

//
const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("calc-container");
body.appendChild(calculatorContainer);

//
const displayNumContainer = document.createElement("div");
displayNumContainer.classList.add("display-num-container");
calculatorContainer.appendChild(displayNumContainer);

// -- create functions for math operations

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

//----------------//

function operate(symbol, a, b) {
  if (symbol == "+") {
    return add(a, b);
  } else if (symbol == "-") {
    return subtract(a, b);
  } else if (symbol == "*") {
    return multiply(a, b);
  } else if (symbol == "/") {
    return divide(a, b);
  }
}

//---------------------//
