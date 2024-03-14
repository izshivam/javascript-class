// Immediately Invoked Function Expression (IIFE)


// (function chai() {
//     console.log(`DB CONNECTED`);
// })()

(function chai() {
    console.log(`DB CONNECTED`);
})();
// chai()

// ( () => {
    //    named IIFE
//     console.log(`DB CONNECTED TWO`);
// } )()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Yug')