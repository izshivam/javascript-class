function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

addTwoNumbers()
addTwoNumbers(5, 6)
addTwoNumbers(5, "a")
addTwoNumbers(5, "a")
addTwoNumbers(5, null)


//**********************************//

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculatePrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatePrice(200, 400, 600, 2000))

const user = {
    username: "hitesh",
    // price: 199
    prices: 199
}

function handleObjecct(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjecct(user)
handleObjecct({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));