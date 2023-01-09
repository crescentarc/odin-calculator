//global variables for buttons
let clearButton = document.querySelector(`.all-clear`);
let equal = document.querySelector(`.equal-sign`);
let decimal = document.querySelector(`.decimal`);
let number = document.querySelectorAll(`.number`);
let operator = document.querySelectorAll(`.operator`);
let currentScreen = document.querySelector(`.current-screen`);
let previousScreen = document.querySelector(`.previous-screen`);
let backspace = document.querySelector(`.backspace`);
let addition = document.getElementById(`addtion`);
let subtraction = document.getElementById(`subtraction`);
let multiplication = document.getElementById(`multiplication`);
let division = document.getElementById(`division`);

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
    if(currentValue.length <= 20) {
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

//allow calculated number to be rounded
function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

//allow for calculations of numbers
equal.addEventListener(`click`, function() {
    if(currentValue != `` && previousValue != ``) {
        operate()
        previousScreen.value = ``;
        if(previousValue.length <= 20) {
            currentScreen.value = previousValue;
        } 
        else {
            currentScreen.value = previousValue.slice(0, 20) + `...`;
        }
    }
})

function operate() {
    previousValue = +previousValue;
    currentValue = +currentValue;

    if(operatorValue == `+`) {
        add()
    } else if(operatorValue == `-`) {
        subtract()
    } else if(operatorValue == `*`) {
        multiply()
    } else{
        divide()
    }

    function add() {
        previousValue += currentValue;
    } 
    
    function subtract() {
        previousValue -= currentValue;
    } 
    
    function multiply() {
        previousValue *= currentValue;
    } 
    
    function divide() {
       previousValue /= currentValue;
      
    } 

    previousValue = roundNumber(previousValue);

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}








