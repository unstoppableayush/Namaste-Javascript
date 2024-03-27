/**
 * Generally used for performance optimization and rate limiting the function calls 
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

