/* Objective: The objective of this exercise is to create a program that generates the Fibonacci sequence up to a specified number of terms using a for loop with incremental values.
Problem Statement: You are tasked with developing a program that calculates and displays the Fibonacci sequence up to a user-defined number of terms. The Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the two preceding terms (e.g., 0, 1, 1, 2, 3, 5, 8, ...).
Instructions:
Prompt the user to enter the number of terms they want in the Fibonacci sequence.
Initialize variables to store the first two terms of the sequence (firstTerm and secondTerm) and display them.
Use a for loop to calculate and display the remaining terms of the sequence.
Inside the loop, calculate the next term (nextTerm) by adding the current term to the previous term.
Update the values of the variables (firstTerm, secondTerm) to progress through the sequence.
Repeat the loop until the desired number of terms is generated.
Hints:
Initialize firstTerm as 0 and secondTerm as 1 to start the sequence.
Use a counter variable to control the number of terms generated.
Ensure the loop continues until the desired number of terms is reached.*/

let numberOfTerms = parseInt(prompt('Enter the number of terms'))
// console.log(numberOfTerms);
function fibonacci(numberOfTerms){
    values = [0,1]

    for (let i = 0; i < numberOfTerms - 2; i++) {
    const nextVal = values[i] + values[i+1]; 
    values.push(nextVal);
}
    return values;
}
const result = fibonacci(numberOfTerms)
console.log(...result);

// Another solution 

let numberOfTerms = parseInt(prompt('Enter the number of terms:'));

let firstVal = 0, secondVal = 1;

console.log("Fibonacci Sequence:");
console.log(firstVal);
console.log(secondVal);

for (let i = 3; i <= numberOfTerms; i++) {
    let nextVal = firstVal + secondVal;

    console.log(nextVal);

    firstVal = secondVal;
    secondVal = nextVal;
}