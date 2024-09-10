//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 14;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 41;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 51;
let y = 61;
let z = 71;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "sad";
let b = "anger";
let c = "sad";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isMorning = true;
let isEvening = false;

console.log(!isMorning); //false
console.log(!isEvening); //true

console.log(!isMorning && isEvening); //false
console.log(isMorning && !isEvening); //true
console.log(isMorning || isEvening); //true
console.log(!isMorning || isEvening); //false
console.log(isMorning == isEvening); //false
console.log(isMorning == !isEvening); //true
