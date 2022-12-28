// Write a JavaScript program to convert a length given in feet to meters.
// TIP: 1 feet = 0.3048 meters

const conversion = 0.3048;
let userInput = prompt("Enter lenght in feet");

let convertedInput = parseFloat(userInput);

let result = conversion * convertedInput;
console.log(`The result is ${result}m.`);

// Write a JavaScript program that will read the two sides of a rectangle and calculate its area
// TIP: area = a * b

let firstInput = prompt("Enter first side: ");
let secondInput = prompt("Enter second side: ");
let area;

let convertedFirstInput = parseFloat(firstInput);
let convertedSecondInput = parseFloat(secondInput);

area = convertedFirstInput * convertedSecondInput;
console.log("The area is: ", area);

// Write a JavaScript program that will calculate area of Circle
// TIP: area = π * r2

const radius = prompt("Enter radius: ");
const convertedRadius = Number(radius);
const circleArea = convertedRadius * convertedRadius * Math.PI;
console.log(`The area of the circle is: ${circleArea}`);

// Write a JavaScript program that will calculate the price of 30 Phones, 
//where the price of one phone is $119.95 and the tax rate is 5%.

const phones = 30;
const costOfOnePhone = 119.95;

let convertedPhones = Number(phones);
let convertedCostOfOnePhone = Number(costOfOnePhone);

let taxRate = (convertedCostOfOnePhone*5)/100;

console.log(`The price of ${phones} phones is ${(convertedCostOfOnePhone*phones) + (taxRate*phones)}`)

