/***
 * Event Bubbling and Capturing are two way of event propagation in DOM Tree.
 * By default:
 *          If any event occur on child element of dom tree then that event will propagate to it's parent as well.
 * 
 * Event Bubbling - In event bubbling the propagation is outwards of the dom tree.
 * Event Capturing - In event Capturing the propagation is inwards of the dom tree.
 * 
 * Event capturing is also known as Event Trickling.
 * 
 * addEventListener('${EVENT}' ,()=>{ callback function
 * } , useCapture(true / false) )
 * 
 * By default -> useCapture - false / 0 (Event Bubbling)
 * Event Capturing -> useCapture - true / 1 (Event Capturing)
 * 
 * stopPropagation method helps to stop the propagation of the event.
 * 
 */


document.querySelector("#grandparent")
.addEventListener('click', ()=>{
    console.log("Grandparent Clicked")
},0) //bubbling

document.querySelector("#parent")
.addEventListener('click', (e)=>{
    console.log("Parent Clicked")
    e.stopPropagation();
},false) //bubbling

document.querySelector("#child")
.addEventListener('click', (e)=>{
    console.log("Child Clicked")
    // e.stopPropagation();
},false) //bubbling