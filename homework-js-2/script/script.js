// Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do

const userMoney = Number(prompt("Please enter how much money you have: "));

if(Number.isNaN(userMoney)){
    console.log("This is not a number.");
} else if(userMoney <= 100){
    console.log("You can't do much things...");
} else if(userMoney > 100 && userMoney <= 1000){
    console.log("You can afford some dinner");
} else if(userMoney > 1000 && userMoney <= 2000){
    console.log("You can afford decent dinner and a few drinks.");
} else if(userMoney > 2000){
    console.log("You can do many things, you are rich");
}

// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values: 

const userInput = Number(prompt("Please enter which year you were born: "));

let zodiacCalculator = (userInput - 4)%12;

console.log(zodiacCalculator);

switch(zodiacCalculator){
    case 0: console.log("Rat"); 
    break;;
    case 1: console.log("Ox"); 
    break;;
    case 2: console.log("Tiger"); 
    break;;
    case 3: console.log("Rabbit"); 
    break;;
    case 4: console.log("Dragon"); 
    break;;
    case 5: console.log("Snake"); 
    break;;
    case 6: console.log("Horse"); 
    break;;
    case 7: console.log("Goat"); 
    break;;
    case 8: console.log("Monkey"); 
    break;;
    case 9: console.log("Rooster"); 
    break;;
    case 10: console.log("Dog"); 
    break;;
    case 11: console.log("Pig"); 
    break;;
}

