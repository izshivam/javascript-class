// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);



// for (let index = 0; index <= 10; index++) {
//     console.log(`Outer loop value: ${index}`);
//     for (let i = 0; i <= 10; i++) {
//         // console.log(`Inner loop value ${index} and inner loop ${i}`);
//         console.log(index + '*' + i + ' = ' + index*i );
//     }
    
// }



for (let index = 1; index <= 10; index++) {
    // console.log(`Outer loop value: ${index}`);
    for (let i = 1; i <= 10; i++) {
        // console.log(`Inner loop value ${index} and inner loop ${i}`);
        // console.log(index + '*' + i + ' = ' + index*i );
    }
    
}



let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// Break & Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }



for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}