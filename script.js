const display = document.querySelector('.display');
const output = document.querySelector('.output');
const lastInput = document.querySelector('.lastInput');
const equals = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operator');

function operate(operator, one, two) {
	display.textContent = '';
	if (operator === '+') {
		return add(parseInt(one), parseInt(two));
	} else if (operator === '*') {
		return multiply(parseInt(one), parseInt(two));
	} else if (operator === '/') {
		return divide(parseInt(one), parseInt(two));
	} else if (operator === '-') {
		return subtract(parseInt(one), parseInt(two));
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

clearBtn.addEventListener('click', clear);

let firstOp = '';
let secondOp = '';
let operatorInput = '';
let displayValue = 0;
output.textContent = '';

digits.forEach(function (digit) {
	digit.addEventListener('click', function (e) {
		const element = e.target;
		if (element.classList.contains('digit')) {
			if (parseInt(display.textContent) === firstOp) {
				display.textContent = '';
			}
			if (operatorInput == '') {
				//if no operator was selected, input operand #1
				num1(parseInt(e.target.value));
			} else if (operatorInput != '') {
				//if operator has been selected, input operand #2
				num2(parseInt(e.target.value));
			}
		}
	});
});

operators.forEach(function (operator) {
	operator.addEventListener('click', function (e) {
		const element = e.target;
		if (element.classList.contains('operator')) {
			if (firstOp != '' && operatorInput == '' && secondOp == '') {
				operatorInput = e.target.value;
				display.textContent = '';
			}
			if (firstOp != '' && secondOp != '' && operatorInput != '') {
				output.textContent = `${firstOp} ${operatorInput} ${secondOp} =`;
				firstOp = operate(operatorInput, firstOp, secondOp);
				secondOp = '';
				display.textContent = firstOp;
				operatorInput = e.target.value;
			} else if (
				firstOp != '' &&
				secondOp != '' &&
				operatorInput != '' &&
				e.target.value === '='
			) {
				output.textContent = `${firstOp} ${operatorInput} ${secondOp} =`;
				firstOp = operate(operatorInput, firstOp, secondOp);
				secondOp = '';
				display.textContent = firstOp;
				operatorInput = e.target.value;
			} else if (firstOp != '' && secondOp == '' && operatorInput == '') {
				operatorInput = e.target.value;
				display.textContent = '';
			}
		}
	});
});

function num1(input) {
	firstOp += input;
	display.textContent += input;
}

function num2(input) {
	secondOp += input;
	display.textContent += input;
}

function clear() {
	firstOp = '';
	secondOp = '';
	operatorInput = '';
	displayValue = 0;
	output.textContent = '';
	display.textContent = '';
}
