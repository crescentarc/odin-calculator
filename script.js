//is called with "Add" button, adds two input numbers and displays sum
function add() {
    let num1 = document.getElementById(`addition1`).value;
    let num2 = document.getElementById(`addition2`).value;
    let sum = num1 + num2;
    document.getElementById(`sum`).innerText = sum;
}

//is called with "Subtract" button, subtracts two input numbers and displays difference
function subtract() {
    let num1 = document.getElementById(`subtraction1`).value;
    let num2 = document.getElementById(`subtraction2`).value;
    let difference = num1 - num2;
    document.getElementById(`difference`).innerText = difference;
}

//is called with "Multiply" button, multiplies two input numbers and displays product
function multiply() {
    let num1 = document.getElementById(`multiplication1`).value;
    let num2 = document.getElementById(`multiplication2`).value;
    let product = num1 * num2;
    document.getElementById(`product`).innerText = product;
}

//is called with "Divide" button, divides two input numbers and displays quotient
function divide() {
    let num1 = document.getElementById(`division1`).value;
    let num2 = document.getElementById(`division2`).value;
    let quotient = num1 / num2;
    document.getElementById(`quotient`).innerText = quotient;
}
