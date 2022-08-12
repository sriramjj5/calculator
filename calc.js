function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b; //might round down integers, take care of it later
}

function operate(op, a, b) {
    if (op === '+') {
        return add(a, b);
    }
    if (op === '-') {
        return add(a, b);
    }
    if (op === '*') {
        return add(a, b);
    }
    if (op === '/') {
        return add(a, b);
    }
}