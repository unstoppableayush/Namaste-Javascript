/*
 *What is async?
 *What is await?
 *How async await works behind the scenes?
 *Example of using async/await
 *Error Handling
 *Interviews
 *Async await vs Promise.then/.catch
 
 */

const p = new Promise((resolve , reject) => {
    resolve("Promise Resolved Value 1 !!");
});

async function getData(){
    // return "Namste";
    return p;
}


/*
if non promise value then async function takes the value
and wrap inside the promise and return it

asynch function automatically wrap the vaule inside 
promise and return the promise.

function always return a promise.

If we are return the promise then this promise not will wrap into 
other promise

*/
const dataPromise = getData();
console.log(dataPromise);
dataPromise.then(res => console.log(res));



//using await with async 

// async and awit function is used to handle promises  

const pr = new Promise((resolve , reject) => {

    setTimeout(() => {
        resolve("Promise Resolved Value 2 !!");
    },5000);
    
});

const pr1 = new Promise((resolve , reject) => {

    setTimeout(() => {
        resolve("Promise Resolved Value 2 !!");
    },10000);
    
});




//await can only be used inside an async function
async function handlePromise(){

    //It will be print first
    console.log("Written Before Promise Resolve");

    //Here JS Engine will wait to resolve the promise 
    const val = await pr;  
    //await is used before the promise that has to be resolved

    console.log("Namste Javascript");
    //after resolving promise then print this

    console.log(val);  //gives the resolved value


    const val1 = await pr1;  
    console.log("Namste Javascript 1");
    console.log(val1);
    //these lines have to wait for 10 seconds to resolve 
    //if pr has 10 seconds to wait , if pr has 5 sec and
    //pr1 has 10 second then pr will resolved at 5 second 
    //and then pr1 will resolved after 10 second

    //if two promises are there mainly depending on first 
    //promise 

}
handlePromise();



/*
function getData1(){

 // JS Engine will not wait for promise to be resolved
  pr.then((res) => console.log(res));
  console.log("Namste Javascript");
  //it will not print Namste Javascript First

}

getData1();

*/


//Real World Example of async/await

const API_URL = "https://api.github.com/users/unstoppableayush";

async function handlePromise1(){

    //Now Error Handling
    try{
        const data =await fetch(API_URL);
        const jsonValue = await data.json();
    console.log(jsonValue);
        
    }
    catch(err){
        console.log(err);
    }

    //fetch () is promise when it get resolve then => gives Respose object
    //Respose object has a body which is readable stream
    //convert readable stream we use .json() ,json() is again promise
    //if json() is resolve then we get jsonValue

    //fetch() => Response.json() => jsonValue



}
handlePromise1();


