function add(a, b) {
    let c = Number(a) + Number(b);
    result.textContent = c;
    display.textContent = '';
}

function subtract(a, b) {
    let c = Number(a)-Number(b);
    result.textContent = c;
    display.textContent = '';
}

function multiply(a,b) {
    let c = Number(a)*Number(b);
    result.textContent = c;
    display.textContent = '';
}

function divide(a,b) {
    let c = Number(a)/Number(b);
    result.textContent = c;  //might round down integers, take care of it later
    display.textContent = '';
}

function operate(op, a, b) {
    if (op === '+') {
        return add(a, b);
    }
    if (op === '-') {
        return subtract(a, b);
    }
    if (op === '*') {
        return multiply(a, b);
    }
    if (op === '/') {
        return divide(a, b);
    }
}

const opToDo = [];

const ops = document.getElementsByClassName("op");
const numbers = document.getElementsByClassName("number");
const equals = document.getElementById("equals");
const display = document.getElementById("display");
const result = document.getElementById("result");

for (let i = 0; i < ops.length; i++) {
    ops.item(i).addEventListener('click', () => {
        opToDo.push(ops.item(i).textContent);
        display.textContent += ops.item(i).textContent;
    });
}

for (let i = 0; i < numbers.length; i++) {
    numbers.item(i).addEventListener('click', () => {
        opToDo.push(numbers.item(i).textContent);
        display.textContent += numbers.item(i).textContent;
    });
}


equals.addEventListener('click', evaluate);

function evaluate() {
    console.log(opToDo);
    let curr = '';
    let num1 = '';
    let num2 = '';
    let op = '';
    for (let i = 0; i < opToDo.length; i++) {
        if (isNaN(opToDo[i])) {
            op = opToDo[i];
            num1 = curr;
            curr = '';
            continue;
        }
        curr += opToDo[i];
    }
    num2 = curr;

    opToDo.length = 0;
    
    operate(op, num1, num2);
}