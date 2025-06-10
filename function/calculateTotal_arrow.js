/*Write a function called calculateTotal that takes price and quantity as parameters.
Use a helper function named multiply that multiplies two numbers.*/

const multiply = (a, b) => a * b;

const calculateTotal = (price, quantity) => multiply(price, quantity);

// Example usage
console.log(calculateTotal(50, 3)); // Output: 150
