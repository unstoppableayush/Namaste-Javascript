/**
 * Debouncing & Throttling
 * ------------------------
 * used for optimizing performance of web apps.
 * It happends by limiting the rate of function calls.
 * 
 * Debouncing
 * -----------
 * If the diffrence b/w keystroke is greater than or to a particular time (300ms)
 * then make a api call . 
 * Here we are reducing the api call with not making api call for every keystroke.
 * The time difference b/w keystrokes is a fixed particular time then it make function call.
 * 
 * Trottling
 * ----------
 * If time difference b/w function calls is a fixed particular time(300ms) then it make function call.
 * (last function call - current function call)
 * 
 */