//Declare a global variable outside of any function.

//Create a function that tries to modify that global variable.

//Create another function that declares a local variable with the same name.

//Observe the behavior when calling both functions.

// Declare a global variable here
let globalVar = "Hello";
console.log(globalVar);

function modifyGlobal() {
  console.log(globalVar); //Hello

  //Try to modify the globalv ariable here
  globalVar = "Hi";
}

modifyGlobal();

console.log(globalVar);
