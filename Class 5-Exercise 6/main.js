//Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.

//Starting Code:

function hoistingTest() {
    // Try printing a variable here
console.log(x); // hi
}

// Declare the variable after the console.log

let x = "hi"

hoistingTest();