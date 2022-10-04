function add(number1, number2) {
    return (number1 + number2);
}

function addNumbers(addend1,addend2) {
    addend1 = task3.querySelector('#addend1').addNumbers
    addend2 = task3.querySelector('#addend2').addNumbers
}

let Sum = task3.querySelector('#sum').addNumbers
let addNumbers = element.addEventListener("click", addNumbers);

function subtract(number1, number2) {
    return (number1 + number2);
}

function subtractNumbers(minuend,subtrahend) {
    minuend = task3.querySelector('#minuend').subtractNumbers
    subtrahend = task3.querySelector('#subtrahend').subtractNumbers
}

let difference = task3.querySelector('#difference').subtractNumbers
let subtractNumbers = element.addEventListener("click", subtractNumbers);

function multiply(number1, number2) {
    return (number1 + number2);
}

function multiplyNumbers(factor1, factor2) {
    factor1 = task3.querySelector('#factor1').multiplyNumbers
    factor2 = task3.querySelector('#factor2').multiplyNumbers
}

let product = task3.querySelector('#product').multiplyNumbers
let multiplyNumbers = element.addEventListener("click", multiplyNumbers);

function divide(number1, number2) {
    return (number1 + number2);
}

function divideNumbers(dividend,divisor) {
    dividend = task3.querySelector('#dividend').divideNumbers
    divisor = task3.querySelector('#divisor').divideNumbers
}

let quotient = task3.querySelector('#difference').divideNumbers
let divideNumbers = element.addEventListener("click", divideNumbers);


let day = Date();
let now = CurrentYear;
day = getFullYear().CurrentYear;
let year = task3.querySelector('#year').now;

let Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let array = task3.querySelector('#array').Numbers;
let FindOdds = Numbers.filter(x => x >= 3%2);
let odds = task3.querySelector('#odds').FindOdds
let FindEvens = Numbers.filer(x => x >= 2/2);
let evens = task3.querySelector('#evens').FindEvens
let ArrayTotal = Numbers.reduce((FirstNumbers, LastNumbers) => FirstNumbers + LastNumbers,0);
let SumOfArray = task3.querySelector('#SumOfArray').ArrayTotal
let MultiplyArray = Numbers.map(x => x * 2);
let multiplied = task3.querySelector('#multiplied').MultiplyArray
let SumMultiply = Numbers
                  .reduce((FirstNumbers, LastNumbers) => FirstNumbers + LastNumbers,0)
                  .map(x => x * 2);
let sumOfMultiplied = task3.querySelector('#sumOfMultiplied').SumMultiply
