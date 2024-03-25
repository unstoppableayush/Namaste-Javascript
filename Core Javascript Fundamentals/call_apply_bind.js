
//  One method using in different objects

let name ={
    firstName : "Ayush",
    lastName : "Kumar",
    
}

let name2 = {
    firstName:"Sachin",
    lastName: "Tendulkar",
}

let printFullName = function(homeTown="" , state=""){
    console.log(this.firstName + " " + this.lastName + " from "+ homeTown +" " + state);
}

// Call Method
//------------


printFullName.call(name);

/**
 *  Using call method we can do function borrowing.
 * Here we are calling the function in name2 object.
 * first parameter will always be reference to this variable and later arguments can be function aruguments.
 */

printFullName.call(name2);
// called_function  method  object

let callMethod = printFullName.call(name2, "Aurangabad" ,"Bihar");

//Apply method
//-------------

/**
 * The only difference between call and apply method i.e. the way we pass arguments .
 * In call method we pass the arguments individually.
 * In Apply method we pass the arguments in an ArrayList.
 */ 

printFullName.apply(name , ["Apply" , "Method"])

            //Bind method
            //-------------

/****
 * It looks like as a call method .
 * Bind method binds the method with object and return a copy of that method.
 * Gives a copy of method which can be invoked later
 */ 

let printMyName = printFullName.bind(name , "Bind" , "Method");

console.log(printMyName); // prints the function

// console.log(callMethod);
