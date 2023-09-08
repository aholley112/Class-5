//Instructions:

//Develop a JavaScript function that returns another function.
//The inner function should have access to variables from the outer function's scope.

 // A function that returns another function

 function findSum(x) {
   return function (y) {
     return x + y;
   };
 }
 
 const add5 = findSum(5);
 const add10 = findSum(10);
 
 console.log(add5(5)); // 10
 console.log(add10(8)); // 18


