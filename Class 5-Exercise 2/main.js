//Instructions:Draft a JavaScript function where you call a function before its declaration.
//Analyze the behavior and understand how hoisting impacts the outcome.

// Call the hoistedFunction here
greet(); 
// Now, declare the hoistedFunction below
function greet() {
  console.log("Amanda");
}