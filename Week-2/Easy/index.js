
/*  Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
*/


const fs = require("fs")
const filePath = "file1.txt";

async function readFileAndPrint(filePath,timeToWait) {
    try{
    const data = await fs.promises.readFile(filePath,"utf-8");

    await new Promise((resolve)=>{
        setTimeout(resolve,timeToWait)
    })

    console.log('Task finished after waiting for', timeToWait, 'milliseconds');
    console.log(`file Content ${data}`);
    }catch(err){
        console.error('failed to read file', err)
    }
}

const waitingTimes =[2000,100000,15000]

waitingTimes.forEach(time => {
    readFileAndPrint(filePath,time)
});





// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const data = "Great Yaar Shinu!, You have modified the data.";

async function writeContent(filePath, txt, encoding = 'utf-8') {
    try {
        setTimeout(async () => {
            await fs.promises.writeFile(filePath, txt,)
            console.log('File written successfully');
        }, 5000)

        console.log('wait writing file is in process...');
    } catch (err) {
        console.log('something went wrong:', err);
    }
}

writeContent('file1.txt', data)


















