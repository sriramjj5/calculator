function add(a, b) {
    let c = Number(a) + Number(b);
    result.textContent = c;
    display.textContent = '';
    return c;
}

function subtract(a, b) {
    let c = Number(a)-Number(b);
    result.textContent = c;
    display.textContent = '';
    return c;
}

function multiply(a,b) {
    let c = Number(a)*Number(b);
    result.textContent = c;
    display.textContent = '';
    return c;
}

function divide(a,b) {
    let c = Number(a)/Number(b);
    result.textContent = c;  //might round down integers, take care of it later
    display.textContent = '';
    return c;
}

let displayReset = 1;

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
        if (displayReset == 1) {
            display.textContent = '';
            displayReset = 0;
            console.log('hi');
        }
        opToDo.push(ops.item(i).textContent);
        display.textContent += ops.item(i).textContent;
    });
}

for (let i = 0; i < numbers.length; i++) {
    numbers.item(i).addEventListener('click', () => {
        if (displayReset == 1) {
            display.textContent = '';
            displayReset = 0;
            console.log('hi');
        }
        opToDo.push(numbers.item(i).textContent);
        display.textContent += numbers.item(i).textContent;
    });
}

function error() {
    display.textContent = 'ERROR';
}


equals.addEventListener('click', evaluate);

function evaluate() {
    console.log(opToDo);
    if (isNaN(opToDo[opToDo.length - 1])) {
        error();
    } else {

        let flag = 0;

        let curr = '';
        let num1 = '';
        let num2 = '';
        let op = '';


        for (let i = 0; i < opToDo.length; i++) {
            if (isNaN(opToDo[i]) && opToDo[i] !== '.') {
                if (flag === 1) {
                    num2 = curr;
                    const newOpToDo = opToDo.slice(i);
                    newOpToDo.unshift(operate(op, num1, num2));
                    console.log(opToDo.slice(i));
                    console.log(newOpToDo);
                    opToDo.length = 0;
                    for (let i = 0; i < newOpToDo.length; i++) {
                        opToDo.push(newOpToDo[i]);
                    }
                    evaluate();
                }
                flag = 1;
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
    displayReset = 1;
}