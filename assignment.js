// Problem 1: Write a function to calculate the area of a triangle.

function areaOfTriangle(base, height){
    let area = (1/2)*base*height;
    console.log("The area of triangle is " + area);
}

areaOfTriangle(20, 30);

// Problem 2: Write a function to convert degrees to radians.

function toRadian(value){
    let radianValue = value * ( Math.PI / 180);
    console.log("The radian value is " + radianValue);
}

toRadian(90);
 
// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactoria(value){
    if(value === 0 || value === 1){
        return 1;
    }else{
        let fact = 1;
        for(let i = value; i >= 1; i--){
            fact *= i;
        }
        return fact;
    }
}

console.log(calculateFactoria(5));

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(num){
    if(num === 1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
            return true;
        }
    }
}

console.log(isPrime(37));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(arr1, arr2){
    let newArr = arr1.concat(arr2);
    return newArr;
}

let arr1 = [25, 30, 40, 60, 80, 46, 55, 66];
let arr2 = [32, 36, 89, 15, 20];

console.log(mergeArrays(arr1, arr2));

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return "This is a leap year";
    } else {
        return "Not Leap year";
    }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function removeDuplicates(arr) { 
    return [...new Set(arr)]; 
} 

let arr = ['Banana', 'Lichi', 'Mango', 'Banana', 'Apple', 'Papaya', 'Lichi'];
console.log(removeDuplicates(arr));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

console.log(convertToCelsius(98.6));

// Problem 9: Write a function to find the maximum of five numbers.

function maxNum(a, b, c, d, e){
    return Math.max(a, b, c, d, e);
}

console.log(maxNum(25, 30, 18, 90, 56))

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(value){
    if (value.length % 2 === 0) {
        console.log("even");
      } else {
        console.log("odd");
      }
}

evenOdd("Hello");

/*

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
Ans: Difference between 'if...else' and 'switch' statements-
a. The if and else blocks are executed depending on the condition in the if statement. But the switch statement has multiple cases, and the code block corresponding to that case is executed.
b. In "if else" tests both logical expressions and equality, but in "switch" tests only equality.
c. "if else" is used for integer, character, pointer, floating-point type, or Boolean type. "switch" is used for character expressions and integers.

2. What is JavaScript, and what is its primary purpose in web development?
Ans: JavaScript is the Programming Language for the Web. It can be used in backend and fontend both. For this reason this is a very popular programming language for web development.

3. Explain the difference between var, let, and const when declaring variables in JavaScript.
Ans: var variables can be re-declared and updated. Variables defined with let cannot be Redeclared, must be Declared before use and can be Redeclared in Block Scope. Variables defined with cons cannot be Redeclared, cannot be Reassigned and can be Redeclared in Block Scope.

5. What is the difference between "null" and "undefined" in JavaScript?
Ans: Undefined means a variable has been declared but has yet not been assigned a value. Null is an assignment value. It can be assigned to a variable as a representation of no value. 


*/