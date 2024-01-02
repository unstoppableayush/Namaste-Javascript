/*
Topics Covered
------------------------
1. this in global space
2. this inside a function
3. this in strict node - (this substitution)
4. this value depends on how this is called (window)
5. this inside a object's method
6. call apply bind methods (sharing methods)
7. this inside arrow function
8. this inside nested arrow function
9. this inside DOM
*/

// "use strict";

// 1.this in global object

console.log(this) // globalObject


//This keyword in global space represent the global object

//Javascript not only runs on browser. can run inside smartwatch , browser ,  mobile phone

//every where there is JRM(Javascript Runtime Enviourment) that can be different

//Inside browser global object different , inside Nodejs global object is different , any other place global object can be different.

//In case of browser global object is window and inside Node Js is global.

//---------------------------------------------------------------

// 2. this inside a function

function x(){
    console.log(this);
}

x();

//this keyword inside function repsents window object but different than global window object

//this keyword work differently in strict mode and non-strict mode

// insise function the value of this keyword depends on strict / non strict mode

//strict mode  having some stricter rules for javascript

//inside non-strict mode the value will be window and in strict mode the value will be undefined .

//(this substitution)->if the value of this keyword is undefined or null then this will be replace with global object.(only in non strict mode)

//by default value of this keyword inside function is undefined.


//------------------------------------------------------



// 3. this in strict node - (this substitution)

// 4. this keyword value depends on how the function is called (window)


//in strict mode

x();        //undefined
window.x(); //window

//if the function is called without any refrence then the value is undefined. If you call with refrence of window object then value will be  window object.


//--------------------------------------------------------


// 5. this inside a object's method

const obj = {
    a:10,
    x: function(){
        console.log(this);  //obj
        console.log(this.a); //obj.a
        
    }//method
}

obj.x();

//inside method the value of this keyword repsrents it's own object.

//-------------------------------------------------------------


//  6. call apply bind methods (sharing methods)

const student = {
    name:"Ayush",
    printName : function(){
        console.log(this.name);
    }
};
student.name;

const student2 = {
    name : "Deepika",
}

student.printName.call(student2);

//value of this = student


//-----------------------------------------------------


// 7. this inside arrow function

const object = {
    a : 10,
    x: ()=>{
        console.log(this);
    }
}

object.x();

//it is enclosed inside the lecxical context . lecxically present in global space

//this keyword represent the global object

//this keywords retains the value of enclosing lexical context


//------------------------------------------------------------


// 8. this inside nested arrow function


const obj2 = {
    a : 10,
    x: function(){
        
     //enclosing lexical context
      const y = ()=>{
        console.log(this);
       };
       y();

    }
}

obj2.x(); //obj2

//where the arrow function is lexically enclosed 

//---------------------------------------------------


// 9. this inside DOM => Reference to the html element

{/* <button onclick="alert(this)">Click me</button> */}


