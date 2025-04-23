// operation.js
let currentValue = '';
let storedValue = '';
let currentOperation = null;

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function multi(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

function appendToDisplay(value) {
    currentValue += value;
    return currentValue;
}

function clearDisplay() {
    currentValue = '';
    storedValue = '';
    currentOperation = null;
    return '0';
}

function backspace() {
    currentValue = currentValue.slice(0, -1);
    return currentValue || '0';
}

function calculate() {
    if (!storedValue || !currentOperation) return currentValue;
    
    const num1 = parseFloat(storedValue);
    const num2 = parseFloat(currentValue);
    
    let result;
    switch(currentOperation) {
        case '+': result = sumar(num1, num2); break;
        case '-': result = restar(num1, num2); break;
        case '*': result = multi(num1, num2); break;
        case '/': result = division(num1, num2); break;
        default: return currentValue;
    }
    
    currentValue = result.toString();
    storedValue = '';
    currentOperation = null;
    return currentValue;
}

export {
    sumar, restar, multi, division,
    appendToDisplay, clearDisplay, backspace, calculate
}