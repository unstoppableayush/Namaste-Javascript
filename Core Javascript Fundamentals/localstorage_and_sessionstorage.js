/***
 * There are two mechanism to store data on the browser.
 * Data is key-value pair of strings.
 * 1. Session Storage 
 * -------------------
 *  Data is persisted for only particular session.
 *  Unlike cookies Session Stroage Data is not being sent to the server
 *  by making network request call.
 *  Session Stroage data has larger capacity to hold.(5mb)
 * 
 * 2. Local Storage 
 * -----------------
 * Same as session but It does't come with expiry.
 * It stores the data permanently on web browser.
 * The storage capacity of local storage in a browser varies depending on the browser.
 * However, most browsers have a limit of 5-10 MB per origin.
 * It can be used to optimizing the performance of web apps.
 * 
 * 
 * Due to Security reasons Web Storage API follow same origin Policy.
 * Origin Comprises three things - 
 * 1. Protocol 
 * 2. Host or Domain 
 * 3. Port
 */

localStorage.setItem("Hello","World");
console.log(localStorage.getItem("Hello"))
localStorage.removeItem("Hello")
localStorage.clear();//clears everything

const user = {name:"Ayush"}

localStorage.setItem("user-copy",JSON.stringify(user))
console.log(localStorage.getItem("user-copy")) //string
console.log(JSON.parse(localStorage.getItem("user-copy"))) //object