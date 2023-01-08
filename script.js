/*
//calls below operator functions when corresponding buttons are clicked
function operate() {
    document.getElementById(`add`).addEventListener(`click`, function() {
        add();
    });

    document.getElementById(`subtract`).addEventListener(`click`, function() {
        subtract();
    });

    document.getElementById(`multiply`).addEventListener(`click`, function() {
        multiply();
    });

    document.getElementById(`divide`).addEventListener(`click`, function() {
        divide();
    }); 
}

//adds 2 input numbers and displays sum
function add() {
    let num1 = document.getElementById(`num1`).value;
    let num2 = document.getElementById(`num2`).value;
    let sum = num1 + num2;
    document.getElementById(`answer`).innerText = sum;

    if (num1 == `` || num2 == ``) {
        document.getElementById(`answer`).innerText = `Please enter 2 numbers to operate on.`;
    }
}

//subtracts 2 input numbers and displays difference
function subtract() {
    let num1 = document.getElementById(`num1`).value;
    let num2 = document.getElementById(`num2`).value;
    let difference = num1 - num2;
    document.getElementById(`answer`).innerText = difference;

    if (num1 == `` || num2 == ``) {
        document.getElementById(`answer`).innerText = `Please enter 2 numbers to operate on.`;
    }
}

//multiplies 2 input numbers and displays product
function multiply() {
    let num1 = document.getElementById(`num1`).value;
    let num2 = document.getElementById(`num2`).value;
    let product = num1 * num2;
    document.getElementById(`answer`).innerText = product;

    if (num1 == `` || num2 == ``) {
        document.getElementById(`answer`).innerText = `Please enter 2 numbers to operate on.`;
    }
}

//divides 2 input numbers and displays quotient
function divide() {
    let num1 = document.getElementById(`num1`).value;
    let num2 = document.getElementById(`num2`).value;
    let quotient = num1 / num2;
    document.getElementById(`answer`).innerText = quotient;

    if (num1 == `` || num2 == ``) {
        document.getElementById(`answer`).innerText = `Please enter 2 numbers to operate on.`;
    }
}

//load page with event listeners for buttons active
operate();
*/

//global variables for buttons
let clearButton = document.querySelector(`.all-clear`);
let equal = document.querySelector(`.equal-sign`);
let decimal = document.querySelector(`.decimal`);
let number = document.querySelectorAll(`.number`);
let operator = document.querySelectorAll(`.operator`);
let currentScreen = document.querySelector(`.current-screen`);
let previousScreen = document.querySelector(`.previous-screen`);
let backspace = document.querySelector(`.backspace`);

//set default value for screens and operators
let operatorValue = ``;
let previousValue = ``;
let currentValue = ``;

//allow number buttons to be entered onto screen
number.forEach((number) => number.addEventListener(`click`, function (e) {
    inputNumber(e.target.value);
    currentScreen.value = currentValue;
}))

function inputNumber(num) {
    if(currentValue.length <= 10) {
        currentValue += num;
    }
}

//allow operators to be entered onto screen
operator.forEach((op) => op.addEventListener(`click`, function (e) {
    utilizeOperator(e.target.value);
    previousScreen.value = previousValue + ` ` + operatorValue;
    currentScreen.value = currentValue;
}))

function utilizeOperator(op) {
    operatorValue = op;
    previousValue = currentValue;
    currentValue = ``;
}

//add just 1 decimal to input screen
decimal.addEventListener(`click`, function() {
    inputDecimal();
})

function inputDecimal() {
    if(!currentValue.includes(`.`)) {
        currentValue += `.`;
        currentScreen.value = currentValue;
    }
}

//allow AC button to clear screen
clearButton.addEventListener(`click`, clear);

function clear() {
    previousValue = ``;
    currentValue = ``;
    operatorValue = ``;
    previousScreen.value = currentValue;
    currentScreen.value = currentValue;
}

//allow backspace button to delete 1 screen character per press
backspace.addEventListener(`click`, function() {
    deleteCharacter();
})

function deleteCharacter() {
    currentValue = currentValue.slice(0, -1);
    currentScreen.value = currentValue;
}



