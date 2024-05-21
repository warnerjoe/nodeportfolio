document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator button');
    
    let currentInput = '';
    let firstOperand = null;
    let operator = null;
    let shouldResetDisplay = false;

    buttons.forEach(button => button.addEventListener('click', handleButtonClick));

    function handleButtonClick(event) {
        const value = event.target.textContent;

        if (isNumber(value) || value === '.') {
            handleNumber(value);
        } else if (isOperator(value)) {
            handleOperator(value);
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        }
    }

    function isNumber(value) {
        return !isNaN(value);
    }

    function isOperator(value) {
        return ['+', '-', '*', '/'].includes(value);
    }

    function handleNumber(value) {
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
        currentInput += value;
        display.value = currentInput;
    }

    function handleOperator(value) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (operator) {
            firstOperand = performCalculation(firstOperand, parseFloat(currentInput), operator);
            display.value = firstOperand;
        }
        operator = value;
        currentInput = '';
    }

    function clearDisplay() {
        currentInput = '';
        firstOperand = null;
        operator = null;
        display.value = '';
    }

    function calculateResult() {
        if (firstOperand !== null && operator !== null) {
            const secondOperand = parseFloat(currentInput);
            const result = performCalculation(firstOperand, secondOperand, operator);
            display.value = result;
            currentInput = result;
            firstOperand = null;
            operator = null;
            shouldResetDisplay = true;
        }
    }

    function performCalculation(first, second, operator) {
        switch (operator) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/': return first / second;
            default: return second;
        }
    }
});
