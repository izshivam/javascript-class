// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 32658952326561n
const bigNumber = 32658952326561n



// Reference (Non Primitive)

// Types : Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Shivam",
    age: 25,
}  

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);


// https://262.ecma-international.org/5.1/#sec-11.4.3



//***************Stack Memory & Heap Memory**********************//

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ubl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);