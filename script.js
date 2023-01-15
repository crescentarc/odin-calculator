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
    currentScreen.innerText = getDisplayNumber(currentValue);
    if(operatorValue != null) {
       previousScreen.innerText =
         `${getDisplayNumber(previousValue)} ${operatorValue}`
    }
    else {
        previousScreen.innerText = ``;
    }
}

function getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split(`.`)[0])
    const decimalDigits = stringNumber.split(`.`)[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
        integerDisplay = ``;
    }
    else {
        integerDisplay = integerDigits.toLocaleString(`en`, {
        maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    }
    else {
        return integerDisplay;
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

//add keyboard support
window.addEventListener(`keydown`, (e) => {
    if(
        e.key == `0` ||
        e.key == `1` ||
        e.key == `2` ||
        e.key == `3` ||
        e.key == `4` ||
        e.key == `5` ||
        e.key == `6` ||
        e.key == `7` ||
        e.key == `8` ||
        e.key == `9` ||
        e.key == `.` 
    ){
        clickNumberButton(e.key)
    }
    else if(
        e.key == `+` ||
        e.key == `-` ||
        e.key == `*` ||
        e.key == `/` 
    ) {
        clickOperationButton(e.key)
    }
    else if(e.key == `Enter`) {
        clickEqualButton(e.key);
    }
    else if(e.key == `Backspace`) {
        clickBackSpaceButton(e.key)
    }
    else if(e.key == `Escape`) {
        clickClearButton(e.key)
    }
})

function clickNumberButton(key) {
    numberButtons.forEach(button => {
        if(button.innerText == key) {
            button.click();
        }
    })
}

function clickOperationButton(key) {
    operatorButtons.forEach(button => {
        if(button.innerText == key) {
            button.click();
        }
    })
}

function clickEqualButton(key) {
    equalButton.click()
}

function clickBackSpaceButton(key) {
    backspaceButton.click()
}

function clickClearButton(key) {
    clearButton.click()
}








