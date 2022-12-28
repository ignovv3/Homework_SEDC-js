// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument:
// name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*.
// They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert






// Write a function that will take an array of 5 numbers as an argument 
// and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if 
// a number is a valid number and call it for every number. If one of the numbers
// of the array is invalid show an error message instead of a result.
const numArray = [1, 2, 3, "hello", 4, 5];

function sumNumberArray(arr) {
  let sum = 0;
  for (const currentNumber of arr) {
    // Without a function
    // if (typeof currentNumber !== "number") {
    //   continue;
    // }

    // With function
    if (!validateNumber(currentNumber)) {
      continue;
    }

    sum += currentNumber;
  }
  return sum;
}

function validateNumber(number) {
  if (typeof number !== "number") {
    return false;
  }
  return true;
}

const sumOfNumbers = sumNumberArray(numArray);
console.log(sumOfNumbers);