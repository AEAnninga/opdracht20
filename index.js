// version 1: Function declaration
function square1(number1, number2) {
    sum = (number1 * number1) + (number2 * number2);
    return sum * sum;
}
// because square1 is a function, it cannot be logged, because it doesnt hold the return value, therefore another variable must be declared and initialized to hold the return value
result = square1(5, 6); 
console.log(result); // 3721


// version 2: Function expression
const square2 = function (number1, number2) {
    sum = (number1 * number1) + (number2 * number2);
    return sum * sum;
};
// because square2 is const and can hold the return value from the function (from the given arguments), it can be logged.
console.log(square2(5, 6)); // 3721 


// version 3: Arrow function
const square3 = (number1, number2) => {
    sum = (number1 * number1) + (number2 * number2);
    return sum * sum;
};

console.log(square3(5, 6));  // 3721



