const util = require("./myUtils.js");

const reader = require("readline-sync");

const number1 = reader.questionInt("Please insert a positive number = ");
const number2 = reader.questionInt("Please insert a positive number = ");

let primeNumbers = [];

for(let i = number1 ; i <= number2 ; i++){
    if(util.isPrime(i)){
        primeNumbers.push(i);
    }
}

util.outputResults(primeNumbers);
