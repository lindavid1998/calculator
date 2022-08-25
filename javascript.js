function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (true) {
        case (operator === '+'):
            return add(a, b)
        case (operator === '-'):
            return subtract(a, b)
        case (operator === '*'):
            return multiply(a, b)
        case (operator === '/'):
            return divide(a, b)
    }
}

// Tests
function assertEqual(expected, actual) {
    if (expected === actual) {
        console.log('passed')
    } else {
        console.log(`failed. expected ${expected} but got ${actual}`)
    }
}

assertEqual(5, add(2, 3))
assertEqual(6, subtract(9, 3))
assertEqual(8, multiply(2, 4))
assertEqual(2, divide(10, 5))
assertEqual(5, operate(2, 3, '+'))
assertEqual(6, operate(9, 3, '-'))
assertEqual(8, operate(2, 4, '*'))
assertEqual(2, operate(10, 5, '/'))
