// JavaScript functionality for a simple calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

// Example usage
console.log('Add: ', add(5, 3)); // Add:  8
console.log('Subtract: ', subtract(5, 3)); // Subtract:  2
console.log('Multiply: ', multiply(5, 3)); // Multiply:  15
console.log('Divide: ', divide(5, 3)); // Divide:  1.666667