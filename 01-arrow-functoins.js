
// basic arrow function
let arrowFunction =  () => {console.log("Hello world")} 


arrowFunction()

// passing arrow function to another arrow function to print a string

let string = callBack => {callBack ("Hello World")}


let e = x => {console.log(x)}

string(e)


// passing in empy arrow function to call astring

let empyfunction = (fun) => fun(1 + 1)

empyfunction(e = (string) => console.log(`one plus one = ${string}`))

// using the same function twice to greet farah and omar 
let callback = (name) => console.log(`Hello ${name}`)

let callOmar = callback => callback("Omar")
callOmar(callback)

let callFarah = call => call("Farah")
callFarah(callback)


              //! What i learnd 
//* arrow functions take less code to call so its better with small functions
//* arrow functions are better for callback functions takes less code and preform the same
//* i can pass functions wich actually really useful and will help me use less code and make my code cleaner in the feature  
//*
//*




