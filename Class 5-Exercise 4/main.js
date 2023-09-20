//Declare a global variable outside of any function.

//Create a function that tries to modify that global variable.

//Create another function that declares a local variable with the same name.

//Observe the behavior when calling both functions.

// Declare a global variable here
let favoriteColor = "Blue";
console.log("My favorite color is " + favoriteColor)

function modifyGlobal() {

//Try to modify the global variable here
 favoriteColor = "Green";
 console.log("My favorite color is " + favoriteColor);
}

function localScope() {
  const favoriteColor = "Red";
  console.log("My favorite color is " + favoriteColor);
}
 
// Call both functions here

modifyGlobal();
localScope();

  
 