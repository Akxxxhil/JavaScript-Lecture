// Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

// JavaScript is Case Sensitive
// Multi-line comments start with ("/*") and end with ("*/").

console.log("Hi welcome to javaScript");
//This is used to print the value in javaScript

//Variables === let,var,const

//Variables declared with let have Block Scope
let firstName = "Akxxhil";
// firstName="Anshuman" ==> let value can change once declared
console.log(firstName);

//Variables declared with the var always have Global Scope.
var secondname = "Biswal";
// secondname="Biswal2" ==> var value can change once declared
console.log(secondname);

const age = 22;
// age=23 ==> const value cant change once declared
console.log(age);

//A variable declared without a value will have the value undefined.

// You cannot re-declare a variable declared with let or const.
// This will not work:
// let carName = "Volvo";
// let carName;
// But this will work in Var that's why dont use var

let x = "5" + 2 + 3;
console.log(x);
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.(value of x is 523)

let y = 5 + "7" + 3;
console.log(y);
//(value of x is 573)

//We can also declare the varible name as $ and _ in start
let $ = "Anshuman Biswal";
let _lastName = "Johnson";
console.log($);

//Var is a global Scope

let myName = "Akxxhil",
  age2 = 34,
  intrest = "gaming";
console.log(myName);
console.log(age2);
console.log(intrest);
// We can declare multiple Variable in a single line

// Hoisting :>>>>>

//In var Hoisting is Possible.

carName = "Volvo";
var carName;
console.log(carName);
//This is ok
