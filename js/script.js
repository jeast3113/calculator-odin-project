let symbol = undefined;
let a = "";
let b = "";

// -- Create DOM variables
const body = document.querySelector("body");

//
const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("calc-container");
body.appendChild(calculatorContainer);

//
const displayNumContainer = document.createElement("div");
displayNumContainer.classList.add("display-num-container");
displayNumContainer.innerHTML = "HELLO";
calculatorContainer.appendChild(displayNumContainer);

//
const clearBtnContainer = document.createElement("div");
clearBtnContainer.classList.add("clear-button-container");
calculatorContainer.appendChild(clearBtnContainer);

//
const operatorBtnContainer = document.createElement("div");
operatorBtnContainer.classList.add("operator-button-container");
calculatorContainer.appendChild(operatorBtnContainer);

//
const numBtnContainer = document.createElement("div");
numBtnContainer.classList.add("number-button-container");
calculatorContainer.appendChild(numBtnContainer);

//--------------------------//

// -- create buttons
//
const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-button");
clearBtn.innerHTML = "C";
clearBtn.setAttribute("value", "clear");
clearBtnContainer.appendChild(clearBtn);

//-----------------------------//
for (let i = 1; i <= 4; i++) {
  const operatorBtn = document.createElement("button");
  operatorBtn.setAttribute("id", `operator-button-${i}`);
  operatorBtn.classList.add("operator-button");
  operatorBtnContainer.appendChild(operatorBtn);
}

const divideBtn = document.getElementById("operator-button-1");
divideBtn.innerHTML = "&#247";
divideBtn.setAttribute("value", "/");
const multiplyBtn = document.getElementById("operator-button-2");
multiplyBtn.innerHTML = "&#215";
multiplyBtn.setAttribute("value", "*");
const subtractBtn = document.getElementById("operator-button-3");
subtractBtn.innerHTML = "&#8722";
subtractBtn.setAttribute("value", "-");
const addBtn = document.getElementById("operator-button-4");
addBtn.innerHTML = "&#43";
addBtn.setAttribute("value", "+");
//----------------------------//

const equalsBtn = document.createElement("button");
equalsBtn.setAttribute("id", "equal-button");
equalsBtn.innerHTML = "&#61";
operatorBtnContainer.appendChild(equalsBtn);

//----------------------------//
for (let i = 1; i <= 9; i++) {
  const numBtn = document.createElement("button");
  numBtn.setAttribute("id", `number-button-${i}`);
  numBtn.classList.add("number-button");
  numBtn.setAttribute("value", i);
  numBtn.innerHTML = i;
  numBtnContainer.appendChild(numBtn);
}

const zeroBtn = document.createElement("button");
zeroBtn.setAttribute("id", `number-button-0`);
zeroBtn.classList.add("number-button");
zeroBtn.setAttribute("value", 0);
zeroBtn.innerHTML = "0";
calculatorContainer.append(zeroBtn);

// -- create functions for math operations

const add = (a, b) => {
  return parseInt(a) + parseInt(b);
};

const subtract = (a, b) => {
  return parseInt(a) - parseInt(b);
};

const multiply = (a, b) => {
  return parseInt(a) * parseInt(b);
};

const divide = (a, b) => {
  return parseInt(a) / parseInt(b);
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

// -- event listeners

clearBtn.addEventListener("click", () => {
  symbol = undefined;
  a = 0;
  b = 0;
  displayNumContainer.innerHTML = 0;
});

//
let nums = document.querySelectorAll(".number-button");
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (symbol == undefined) {
      a += e.target.value;
      document.querySelector(".display-num-container").innerHTML = parseInt(a);
    } else {
      b += e.target.value;
      document.querySelector(".display-num-container").innerHTML = parseInt(b);
    }
  });
});

//
let operators = document.querySelectorAll(".operator-button");
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (a != "" && symbol == undefined) {
      symbol = e.target.value;
    } else if (symbol) {
      document.querySelector(".display-num-container").innerHTML = "ERROR";
      a = "";
      b = "";
      symbol = undefined;
    }
  });
});

//
equalsBtn.addEventListener("click", () => {
  if (symbol && a && b) {
    document.querySelector(".display-num-container").innerHTML = operate(
      symbol,
      a,
      b
    );
    a = document.querySelector(".display-num-container").innerHTML;
    b = "";
    symbol = undefined;
  } else {
    document.querySelector(".display-num-container").innerHTML = "ERROR";
    a = "";
    b = "";
    symbol = undefined;
  }
});
