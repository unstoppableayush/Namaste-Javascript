const p1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P1 Sucess"),3000);
})


const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P2 Sucess");
    },1000);

    // setTimeout( () =>reject("P2 Fail"),1000);
})

const p3 = new Promise( (resolve, reject) =>  {
    // setTimeout( () => resolve("P3 Sucess"),2000 );
    setTimeout( () =>reject("P3 Fail"),2000);
})




Promise.all([p1 ,p2 ,p3])
.then((res) => {
    console.log("Promise.all");
    console.log(res);
})
.catch((err) => {
    console.log("Promise.all");
    console.error(err);
})

/*
In this wait all for success 
If any one fails then give instant result don't wait for all
*/

Promise.allSettled([p1 ,p2 ,p3])
.then((res) => {
    console.log("Promise.allSettled");
    console.log(res);
})
.catch((err) => {
    console.log("Promise.allSettled");
    console.error(err);
})

/* Waited for all promises to settled and gives result
irrespective of whether the result is success or failure
*/

Promise.race([p1 ,p2 ,p3])
.then((res) => {
    console.log("Promise.race");
    console.log(res);
})
.catch((err) => {
    console.log("Promise.race");
    console.error(err);
})

/*
it is kind of race , Whatever the takes least amoung 
three promises will finish and give result , Whether 
fail or sucess

=> return first settled promise
*/


Promise.any([p1 ,p2 ,p3])
.then((res) => {
    console.log("Promise.any");
    console.log(res);

})
.catch((err) => {
    console.log("Promise.any");
    console.error(err);
    console.log(err.errors); //handling aggregate errors
})

/*
It waits for first settled success.
irrespective of failure(ignore it)
if all fails then gives aggregate error
*/