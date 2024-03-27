/**
 * Generally used for performance optimization and rate limiting the function calls .
 * hrottling restricts the rate at which a function can be executed, 
 * ensuring it is not invoked more frequently than a specified limit within a given time interval.
 * 
 */
let count = 0;
const expensive = () =>{
    console.log("Expensive" , count++);
    // window.addEventListener("resize", betterExpensive);

}

let limit = 1000;

const throttle = (func , limit)=>{
    let flag = true;
    
    return function(){
        let context = this;
        args = arguments;
        if(flag) {
            func.apply(context , args);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit)
        }
    }
}

const betterExpensive = throttle(expensive , limit);

