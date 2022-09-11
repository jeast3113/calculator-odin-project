
// -- Create Global Variables
let symbol = "";
let a = "";
let b = "";


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
displayNumContainer.innerHTML = 0;
calculatorContainer.appendChild(displayNumContainer);

//
const clearBtnContainer = document.createElement("div");
clearBtnContainer.classList.add("clear-button-container");
calculatorContainer.appendChild(clearBtnContainer);

const operandBtnContainer = document.createElement("div");
operandBtnContainer.classList.add("operand-button-container");
calculatorContainer.appendChild(operandBtnContainer);

const numBtnContainer = document.createElement("div");
numBtnContainer.classList.add("number-button-container");
calculatorContainer.appendChild(numBtnContainer);

//--------------------------//

// -- create buttons
//
const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-button");
clearBtn.innerHTML = "C";
clearBtnContainer.appendChild(clearBtn);

//-----------------------------//
for (let i = 1; i <= 4; i++) {
  const operandBtn = document.createElement("button");
  operandBtn.setAttribute("id", `operand-button-${i}`);
  operandBtn.classList.add("operand-button");
  operandBtnContainer.appendChild(operandBtn);
}

const divideBtn = document.getElementById("operand-button-1");
divideBtn.innerHTML = "&#247";
const multiplyBtn = document.getElementById("operand-button-2");
multiplyBtn.innerHTML = "&#215";
const subtractBtn = document.getElementById("operand-button-3");
subtractBtn.innerHTML = "&#8722";
const addBtn = document.getElementById("operand-button-4");
addBtn.innerHTML = "&#43";
//----------------------------//

const equalsBtn = document.createElement("button");
equalsBtn.setAttribute("id", "equal-button");
equalsBtn.innerHTML = "&#61";
operandBtnContainer.appendChild(equalsBtn);

//----------------------------//
for (let i = 1; i <= 9; i++) {
  const numBtn = document.createElement("button");
  numBtn.setAttribute("id", `number-button-${i}`);
  numBtn.classList.add("number-button");
  numBtn.innerHTML = i;
  numBtnContainer.appendChild(numBtn);
}

const zeroBtn = document.createElement("button");
zeroBtn.setAttribute("id", `number-button-0`);
zeroBtn.classList.add("number-button");
zeroBtn.innerHTML = "0";
calculatorContainer.append(zeroBtn);

// -- create functions for math operations

const add = (a, b) => {
  return document.querySelector(".display-num-container").innerHTML = (parseInt(a) + parseInt(b));
};

const subtract = (a, b) => {
  return document.querySelector(".display-num-container").innerHTML = (parseInt(a) - parseInt(b));
};

const multiply = (a, b) => {
  return document.querySelector(".display-num-container").innerHTML = (parseInt(a) * parseInt(b));
};

const divide = (a, b) => {
  return document.querySelector(".display-num-container").innerHTML = (parseInt(a) / parseInt(b));
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
let numbers = document.querySelectorAll(".number-button");
numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if (symbol === "") {
      a += e.target.innerHTML;
      document.querySelector(".display-num-container").innerHTML = a;
    } else {
      b += e.target.innerHTML;
      document.querySelector(".display-num-container").innerHTML = b;
    }
  });
});

let symbols = document.querySelectorAll('.operand-button');
symbols.forEach(sym => {
  sym.addEventListener("click", (e) => {
    if (symbol !== "=") {
      symbol = e.target.innerHTML;
    } 
  });
});






