/* Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (n > 0) {
//                 resolve(n)
//             } else if (n < 0) {
//                 reject("pasiing value is Wrong")
//             }
//         }, n * 1000)
//     })
// }

// wait(10).then((seconds) => {
//     console.log(`${seconds} seconds have passed`);
// }).catch((error) => {
//     console.error("something is wrong", error)
// })



/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


function busyWait(ms) {
    return new Promise((resolve) => {
        const start = Date.now();

        while (Date.now() - start < ms) {         
        }

        resolve();
        
    });
}

// Usage example:
busyWait(2000).then(() => {
    console.log("2 seconds have passed");
});