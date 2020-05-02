// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
function max(num1, num2) {
    if (num1 > num2){
        console.log(num1);
    } else if (num1 < num2){
        console.log(num2);
    } else if (num1 === num2){
        console.log(num1);
    }
}

// Call the function
max(12, 43);
