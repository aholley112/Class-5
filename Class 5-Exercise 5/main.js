//Design a function that accepts a parameter.
//The function should return another function that uses the parameter in some way.

function functionFactory(param) {
    // Return a function that makes use of 'param'
}

// Create an instance of the inner function by invoking functionFactory with a parameter

function funcFactory(x){
    return function innerFunc(y) {
        return x + y;
    };
}

const addFive = funcFactory(5); // function innerFunc(y) return 5 +y;
const addTen = funcFactory(10); // function innerFunc(y) return 10 + y:

console.log(addFive(50)); //55
console.log(addTen(50)); //60
