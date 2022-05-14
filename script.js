function operate(operator, num1, num2) {
	display.textContent = '';
	if (operator === 'add') {
		display.textContent = add(num1, num2);
	} else if (operator === 'multiply') {
		display.textContent = multiply(num1, num2);
	}
}

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const display = document.querySelector('.display');

const addition = document.querySelector('#addition');
const multiplication = document.querySelector('#multiplication');

const equals = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

one.addEventListener('click', () => {
	display.textContent += 1;
	displayValue = display.textContent;
});

two.addEventListener('click', () => {
	display.textContent += 2;
	displayValue = display.textContent;
});

three.addEventListener('click', () => {
	display.textContent += 3;
	displayValue = display.textContent;
});

four.addEventListener('click', () => {
	display.textContent += 4;
	displayValue = display.textContent;
});

five.addEventListener('click', () => {
	display.textContent += 5;
	displayValue = display.textContent;
});

six.addEventListener('click', () => {
	display.textContent += 6;
	displayValue = display.textContent;
});

seven.addEventListener('click', () => {
	display.textContent += 7;
	displayValue = display.textContent;
});

eight.addEventListener('click', () => {
	display.textContent += 8;
	displayValue = display.textContent;
});

nine.addEventListener('click', () => {
	display.textContent += 9;
	displayValue = display.textContent;
});

clearBtn.addEventListener('click', clear);

function clear() {
	display.textContent = '';
	displayValue = 0;
	num1 = 0;
	num2 = 0;
	operator = '';
}

let displayValue = 0;
let num1;
let num2;
let operator;

addition.addEventListener('click', () => {
	num1 = parseInt(displayValue);
	display.textContent = '';
	operator = 'add';
	displayValue = 0;
});

multiplication.addEventListener('click', () => {
	num1 = parseInt(displayValue);
	display.textContent = '';
	operator = 'multiply';
	displayValue = 0;
});

equals.addEventListener('click', () => {
	displayValue = display.textContent;
	num2 = parseInt(displayValue);
	operate(operator, num1, num2);
});
