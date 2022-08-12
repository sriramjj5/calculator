function add(a, b) {
    let c = Number(a) + Number(b);
    console.log(c);
}

function subtract(a, b) {
    let c = Number(a)-Number(b);
    console.log(c);
}

function multiply(a,b) {
    let c = Number(a)*Number(b);
    console.log(c);
}

function divide(a,b) {
    let c = Number(a)/Number(b);
    console.log(c);  //might round down integers, take care of it later
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

for (let i = 0; i < ops.length; i++) {
    ops.item(i).addEventListener('click', () => {
        opToDo.push(ops.item(i).textContent);
    });
}

for (let i = 0; i < numbers.length; i++) {
    numbers.item(i).addEventListener('click', () => {
        opToDo.push(numbers.item(i).textContent);
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