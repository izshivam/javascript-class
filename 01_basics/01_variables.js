const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Siliguri"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@google.com"
accountPassword = "54321"
accountCity = "Kolkata"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/