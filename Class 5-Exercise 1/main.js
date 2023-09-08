//Given the code snippet. Explain what scopes are in this current context of the code.
//Starting Code:

//This would be the global scope
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? Yes, because it is global and can be access and modified from any function.
		console.log(innerVar); // Can we access innerVar? Yes, because this is local scope and within a function.
	}

	innerFunction();
}

outerFunction();