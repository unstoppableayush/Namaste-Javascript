/**
 * Curryinng in Javascript
 * ------------------------
 * 1. Using Bind Function
 * 2. Using Closure
 * 
 * Currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.
 */

// Currying using bind method

let multiply = function (x , y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2 );
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3 );
multiplyByThree(5);

//Currying using closures

let multiply1 = function(x){
    return function(y){
        console.log(x * y);
    }
    
}

let multiplyByTwo1 = multiply1(2 );
multiplyByTwo1(6);