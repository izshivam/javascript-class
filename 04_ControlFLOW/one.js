// if
const isUserloggedIn = true

// if ( 2 == "2" ){
//     console.log("executed");
// }


// const temperature = 41
// if ( temperature < 50 ){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");



// const temperature = 41
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("executed");


// <, >, <=, >=, ==, !=, ===, !==



// const score = 200
// if (score > 100) {
//     // var power = "fly"
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);



// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance <750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }



const UserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserloggedIn && debitcard && 2==2) {
    console.log("Allow to buy courses");
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In");
}