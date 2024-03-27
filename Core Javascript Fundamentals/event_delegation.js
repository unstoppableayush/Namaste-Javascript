/**
 * Event delegation is the technic to handling events in the webpage in better way.
 * It is possible because event bubbling is possible in javascript.
 * 
 * Event delegation states that instead of attaching event hanlders on to each and every 
 * html elements individually we should rather attach a event handler to directly parent of
 * these elements.
 * 
 * A single event handler is attached to it's parent the It is 
 * listening each and every click happening inside child. 
 * 
 * Behaviour pattern can be achieved using event delegation.
 * 
 * Benefit
 * --------
 * 1. Memory -> single event handler instead of many
 * 2. Writing less code
 * 3. Dom manipulation
 * 
 * Drawback
 * ---------
 * Some event do not bubbled up.
 * Not to use stopPropagation.
 * 
 */

document.querySelector("#category")
.addEventListener('click',(e)=>{
 
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    if(e.target.tagName == "LI"){
        window.location.href = "/"+e.target.id;
    }
   
    console.log("Category Parent Clicked")
})


document.querySelector("#form")
.addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});