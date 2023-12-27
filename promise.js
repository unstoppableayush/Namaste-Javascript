//promises

const cart = ["shoes" , "shirt" , "jenas"];

const promise = createOrder(cart);   // no need to assign into varibale we can also use

// createOrder(cart)
// .then

//consumer

promise.then(function(orderid){
    console.log(orderid);
    return orderid;
})
// handling the error using catch
.catch(function(er){            //it will handle spefic block of error
    console.log(er.message);
})
.then(function(orderid){
    return proceedToPayment(orderid);   //if payement is sucessful then return payment info
})
// handling the error using catch
.catch(function(er){
    console.log(er.message);
})

.then(function(payementInfo){

    console.log(payementInfo);

})
.catch(function(er){
    console.log(er.message);
})
.then(function(orderid){
    console.log("No matter what happens , I will be definietely be called.");
})



//producer

function createOrder(cart){

    const  pr = new Promise(function(resolve , reject){
        //createOrder
        //validateOrder
        //orderid

        //if cart is not valid then return error
        if(!validateOrder(cart)){

            const err = new Error("cart is not valid");
            reject(err);
        }

        //if cart is valid then return cart id
        const orderid = 12345;
        if(orderid){
            setTimeout(function(){
                resolve(orderid);
            },5000);
           
        }
        
    })
    return pr;
}

// letting cart is valid or not valid
function validateOrder(cart){
    return true;    
}

function proceedToPayment(orderid){
    return new Promise(function(resolve,reject){
        resolve("Payment Succesful");
    })
}