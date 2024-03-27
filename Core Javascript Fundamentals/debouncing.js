/**
 * Debouncing in Javascript
 * ---------------------------
 * 
 */

let counter = 0;
const getData = ()=>{
    //calls an API and gets Data
    console.log("fetching data ..", counter++)
}

const dobounce = function(fn , d){
    let timer;
    return function(){

    let context = this;
    args = arguments;
    clearTimeout(timer);
     timer = setTimeout(()=>{
            fn.apply(context, arguments)
        },d)
        // if we don't clear the timeout before the 300 milisec is passed then getdata will be called otherwise not.
        // we can see if we are pressing key continiously then the getData is not called frequently.

    }
}

const betterFunction = dobounce(getData , 300 )