let firstNum;
let secondNum;
let operator;
let overwrite = false;
let operatorActive = false;

// Update display when numbers are pressed
function displayNums(e) {
    // disable . button if already pressed
    if (display.textContent.includes('.') && e.target.textContent === '.') {
        return
    }
    if (overwrite) {
        display.textContent = ''
        document.getElementById(`${operator}`).classList.remove('active')
        overwrite = false
    }
    display.textContent += e.target.textContent;
};
let display = document.querySelector('.display');
let numbers = Array.from(document.querySelectorAll('.pad button'));
numbers.filter(number => number.textContent !== '=').forEach(number => (
    number.addEventListener('click', displayNums)
));

// Clear display when clear button is pressed
document.querySelector('.clear').addEventListener('click', () => {
    display.textContent = '';
    overwrite = false;
    operatorActive = false;
    firstNum = null;
    secondNum = null;
    operator = null;
    buttons.forEach(button => button.classList.remove('active'))
})


// Add function to operators when pressed
function applyOperator(e) {
    // Run calculation if operator is already active
    if (operatorActive) {
        secondNum = display.textContent;
        display.textContent = `${operate(firstNum, secondNum, operator)}`
        document.getElementById(`${operator}`).classList.remove('active') // remove highlight on previous operator pressed
    }
    firstNum = display.textContent;
    operator = e.target.id;
    overwrite = true;
    operatorActive = true;
    e.target.classList.add('active')
}
let buttons = document.querySelectorAll('.operator')
buttons.forEach(button => button.addEventListener('click', applyOperator))

// Run calculation when = is pressed 
let equal = document.querySelector('#eq')
equal.addEventListener('click', () => {
    if (firstNum === null) {
        return
    }
    secondNum = display.textContent
    display.textContent = `${operate(firstNum, secondNum, operator)}`
    document.getElementById(`${operator}`).classList.remove('active')
    overwrite = true
    operatorActive = false
    firstNum = null;
}) 

// Animate buttons
function animateButton(e) {
    if (e.type === 'mousedown') {
        e.target.style.backgroundColor = '#388'
    } else {
        e.target.style.backgroundColor = ''
    }
}
numbers.forEach(number => number.addEventListener('mousedown', animateButton))
numbers.forEach(number => number.addEventListener('mouseup', animateButton))
document.querySelector('.clear').addEventListener('mousedown', animateButton)
document.querySelector('.clear').addEventListener('mouseup', animateButton)

// Operations
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
    if (b === '0') return 'divide by 0 error'
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