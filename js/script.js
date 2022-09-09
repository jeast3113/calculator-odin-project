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

//
const clearBtnContainer = document.createElement("div");
clearBtnContainer.classList.add("clear-button-container");
calculatorContainer.appendChild(clearBtnContainer);

//--------------------------//

// -- create buttons

const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-button");
clearBtn.innerHTML = "C";
clearBtnContainer.appendChild(clearBtn);

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
