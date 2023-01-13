// global variables for buttons
const numberButtons = document.querySelectorAll(`.number`)
const operatorButtons = document.querySelectorAll(`.operator`)
const equalButton = document.querySelector(`.equal-sign`)
const clearButton = document.querySelector(`.all-clear`)
const backspaceButton = document.querySelector(`.backspace`)
const previousScreen = document.querySelector(`.previous-screen`)
const currentScreen = document.querySelector(`.current-screen`)

//default values for screen
let currentValue = ``;
let previousValue = ``;
let operatorValue = undefined;
currentScreen.innerText = currentValue;
previousScreen.innerText = previousValue;

//updates text of screens as buttons are pressed
function updateDisplay() {
    currentScreen.innerText = currentValue;
    if(operatorValue != null) {
       previousScreen.innerText =
         `${previousValue} ${operatorValue}`
    }
}

//input functionality for numbers + decimal point
numberButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        inputNumber(button.innerText)
        updateDisplay()
    })
})

function inputNumber(number) {
    if (number == `.` && currentValue.includes(`.`)) {
        return
    }
    else {
        currentValue = currentValue.toString() + number.toString()
    }
}

//input functionality for operators
operatorButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        decideOperator(button.innerText)
        updateDisplay()
    })
})

function decideOperator(operator) {
    if (currentValue == ``) {
        return
    }
    if (currentValue != ``) {
        calculate()
    }
    operatorValue = operator;
    previousValue = currentValue;
    currentValue = ``;
}

//add functionality to equal button
equalButton.addEventListener(`click`, button => {
    calculate()
    updateDisplay()
})

//allow user to get answer + string multiple operations
function calculate() {
    let calculatedValue
    const prev = +previousValue;
    const current = +currentValue;
    if (isNaN(prev) || isNaN(current)) {
        return
    }
    switch (operatorValue) {
        case `+`:
            calculatedValue = prev + current;
            break;
        case `-`:
            calculatedValue = prev - current;
            break;
        case `*`:
            calculatedValue = prev * current;
            break;
        case `/`:
            calculatedValue = prev / current;
            break;
        default:
            return
    }
    currentValue = calculatedValue;
    operatorValue = undefined;
    previousValue = ``;
}

//gives all clear button functionality
clearButton.addEventListener(`click`, button => {
    clear()
    updateDisplay()
})

function clear() {
    currentValue = ``
    previousValue = ``;
    operatorValue = undefined;
}

//gives backspace button functionality
backspaceButton.addEventListener(`click`, button => {
    backspace()
    updateDisplay()
})

function backspace() {
    currentValue = currentValue.toString().slice(0, -1);
}








