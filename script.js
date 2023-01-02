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

