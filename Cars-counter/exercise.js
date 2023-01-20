let name = "Linda";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called

function welcome() {
	//console.log(greeting + "," + " " + name + "!");
	let salamu = greeting + "," + " " + name + "!";
	console.log(salamu);
}
welcome();

// Increment and decrement
let myPoints = 3;

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable

// function add3Points(){
//     myPoints += 3
// }
// add3Points()

// function remove1Point(){
//  myPoints -= 1

//  myPoints *= 2
// }
// remove1Point()
// // Call the functions to that the line below logs out 10
// console.log(myPoints)

//altenative

function add3Points() {
	myPoints += 3;
}
function remove1Point() {
	myPoints -= 1;
}
add3Points();
add3Points();
add3Points();

remove1Point();
remove1Point();
console.log(myPoints);

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let messageEr = document.getElementById("error");
//console.log(messageEr)

function message() {
	messageEr.textContent = "Something went wrong, please try again";
}

Calcultor;
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function addition() {
	add = num1 + num2;
	// console.log(add)
	sumEl.textContent = "sum: " + add;
	// sumEl.textContent  = 0
}
// addition()

function deduct() {
	minus = num1 - num2;
	sumEl.textContent = "Sum: " + minus;
}

function division() {
	divide = num1 / num2;
	sumEl.textContent = "Sum " + divide;
}
function multiple() {
	multiply = num1 * num2;
	sumEl.textContent = "Sum: " + multiply;
}
