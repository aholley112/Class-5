//Instructions: Draft a JavaScript function where you call a function before its declaration.
//Analyze the behavior and understand how hoisting impacts the outcome.

// Call the hoistedFunction here
mainFunction();

// Now, declare the hoistedFunction below

function mainFunction() {
    console.log("My name is Amanda");
}

// Call the hoistedFunction here

hoistedFunction();

// Now, declare the hoistedFunction below

function hoistedFunction(){
  console.log("Hoisting allows you to call a function before declaring it.");
}