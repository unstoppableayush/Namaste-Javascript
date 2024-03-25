
/**
 * Polyfill is a piece of code that provides the functionality 
 * to the older browser to get new features  i.e not supportable.
 * Poly -> many , Fill - Fill the gaps
 */

let name = {
    firstName : "Ayush",
    lastName : "Kumar",

}

let printName = function(hometown , state , country){
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state + " " + country);
}

let printMyName = printName.bind(name);
printMyName();

// making own bind method
Function.prototype.mybind = function(...args){
    let obj = this;  // prinName can be access by this keyword
    params = args.slice(1); // removes the first element and return all other elements 
    return function(...args2){
        obj.apply(args[0] , [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name , "Aurangabad" , "Bihar");
printMyName2("India");