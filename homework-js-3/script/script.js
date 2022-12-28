// Function that sums 2 numbers
// Function that subtracts 2 numbers
// Function that multiplies 2 numbers
// Function that divides 2 numbers

let firstUserInput = Number(prompt("Enter first number. "));
let secondUserInput = Number(prompt("Enter second number. "));

function sumOfTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(`The sum of the numbers is: ${sumOfTwoNumbers(firstUserInput, secondUserInput)}`);

function subsOfTwoNumbers(num1, num2){
    let result = num1 - num2;
    return result;
}

console.log(`The substraction of the numbers is: ${subsOfTwoNumbers(firstUserInput, secondUserInput)}`);


function multiOfTwoNumbers(num1, num2){
    let result = num1 * num2;
    return result;
}

console.log(`The multiplication of the numbers is: ${multiOfTwoNumbers(firstUserInput, secondUserInput)}`);

function divOfTwoNumbers(num1, num2){
    let result = num1 / num2;
    return result;
}

console.log(`The dividing of the numbers is: ${divOfTwoNumbers(firstUserInput, secondUserInput)}`);

// Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
// Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. 
//Formula: (5/9) * (Fahrenheit-32); 

function celsiusToFahrenheit(fahrenheits){
    let result = (5/9) * (fahrenheits-32);
    return result;
}

function fahrenheitsToCelsius(celsius){
    let result = celsius * 1.8 + 32;
    return result;
}

let userInput1 = prompt("Enter f2c or c2f: ");
let userInput2 = parseInt(prompt("Enter degrees: "));

if(userInput1 === "f2c"){
    console.log(`${celsiusToFahrenheit(userInput2)}C`);
} else if(userInput1 === "c2f"){
    console.log(`${fahrenheitsToCelsius(userInput2)}F`);
} else {
    console.log("Invalid input!");
}

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

let input = Number(prompt("Enter your year of birth"));
let input1 = Number(prompt("Enter your year of birth"));
let input2 = Number(prompt("Enter your year of birth"));
let currentyear = new Date(2022);

function calculateAge(birthYear, currYear){
    let result = currYear - birthYear;
    return result;
}

console.log(`You are ${calculateAge(input, currentyear)} years old. `);
console.log(`You are ${calculateAge(input1, currentyear)} years old. `);
console.log(`You are ${calculateAge(input2, currentyear)} years old. `);

//Homework
// Write a JavaScript function which accepts a parameter and returns its type and 
//prints it in the console. Try to call the functions 5 times for 5 different types:

const array = ["This", "is", "an", "object"]

console.log(typeof array); // object
console.log(typeof false); // boolean
console.log(typeof 4); // number
console.log(typeof "This is a string"); // string
console.log(typeof undeclaredVariable); // undefined

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

let userWish = prompt("Enter h2d or d2h");
let userYearsInput = parseFloat(prompt("Enter your age: "));

function humanToDogYears(humanYears){
    let result = humanYears / 7;
    return result;
}

function dogToHumanYears(dogYears){
    let result = dogYears * 7;
    return result;
}

if(userWish === "h2d"){
    console.log("This is human to dog years: ", humanToDogYears(userYearsInput));
} else if(userWish === "d2h"){
    console.log("This is dog years to human years: ", dogToHumanYears(userYearsInput));
} else {
    console.log("Invalid input!");
}

// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the amount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let userAmount = Number(prompt("Enter the amount of money that you have: "));
let amountWithdraw = Number(prompt("Enter the amount of money you want to withdraw"))

function atmCalculation(userMoney, withdrawnMoney){
    if(withdrawnMoney > userMoney){
        return "Invalid input!";
    } else {
        let result = userMoney - withdrawnMoney;
        return withdrawnMoney, result;
    }
}

console.log(atmCalculation(userAmount, amountWithdraw));





