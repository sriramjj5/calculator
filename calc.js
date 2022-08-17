let displayReset = 1;
const opToDo = [];
const ops = document.getElementsByClassName("op");
const numbers = document.getElementsByClassName("number");
const equals = document.getElementById("equals");
const display = document.getElementById("display");
const result = document.getElementById("result");

// adding event (click) listeners to all buttons

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
        }
        opToDo.push(numbers.item(i).textContent);
        display.textContent += numbers.item(i).textContent;
    });
}

equals.addEventListener('click', evaluate);

// functions

function operate(op, a, b) {
    let c = 0;
    if (op === '+') {
        c = Number(a) + Number(b);
    }
    if (op === '-') {
        c = Number(a)-Number(b);
    }
    if (op === '*') {
        c = Number(a)*Number(b);
    }
    if (op === '/') {
        c = Number(a)/Number(b);
    }
    result.textContent = c;
    display.textContent = '';
    return c;
}

function error() {
    display.textContent = 'ERROR';
}

function evaluate() {
    if (isNaN(opToDo[opToDo.length - 1])) { // if last button entered before = was not a number
        error();
    } else {

        let flag = 0; // set to 1 if there is more than 1 operator in opToDo

        let curr = '';
        let num1 = '';
        let num2 = '';
        let op = '';


        for (let i = 0; i < opToDo.length; i++) {
            if (isNaN(opToDo[i]) && opToDo[i] !== '.') { // if opToDo[i] is a non-'.' operator
                if (flag === 1) { 
                    num2 = curr;
                    const newOpToDo = opToDo.slice(i);
                    console.log(operate(op, num1, num2));
                    newOpToDo.unshift(operate(op, num1, num2));
                    opToDo.length = 0;
                    for (let i = 0; i < newOpToDo.length; i++) {
                        opToDo.push(newOpToDo[i]);
                    }
                    console.log(opToDo);
                    return evaluate();
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