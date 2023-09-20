//Create a function that sets up a counter using closures.
//The outer function should define a count variable.
//The inner function should increment and print the count each time it's invoked.

//Starting Code:

function setupCounter() {
    // Define a count variable here

    let counter = 0;

    return function() {
        // Increment and print the count
        counter++;
        console.log(counter);
    }
}

// Create a counter instance and invoke it to test

const counterCall = setupCounter();
counterCall();
counterCall();