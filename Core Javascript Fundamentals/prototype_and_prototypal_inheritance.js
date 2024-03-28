/**
 * Whenever we create any object or functions , javascript engine automatically
 * puts the hidden properties into object and attaches it to object.
 * So we get access to properties and methods.
 * It is an object which is attached to each and every method.
 */
let arr = ["Ayush" , "Ayu"]
let object = {
    name: "Ayush",
    city: "Aurangabad",
    getIntro : function(){
        console.log(this.name + " from "+ this.city);
    }
}

function fun(){

}

// console.log(arr.__proto__);
// console.log(Array.prototype);
//Both above are same

// console.log(arr._proto_._proto_) 
// console.log(object._proto_)
// Both above are object 

// console.log(arr._proto_._proto_._proto_)
// console.log(object._proto_._proto_);
// null 

console.log(fun.__proto__)


let object2 = {
    name:"Aman",
}
// Prototypal Inheritence
// Never do this
object2.__proto__ = object;
// here we can access the properties of object also

console.log(object2.name)//Ayushi
console.log(object2.city) // Aurangabad

console.log(object.getIntro())
console.log(object2.getIntro())

//setting own function

Function.prototype.mybind = function(){
    console.log("Own Function")
}

console.log(fun.__proto__.mybind()) // own function

//We can access this mybind function in any other functions

console.log(fun.mybind())