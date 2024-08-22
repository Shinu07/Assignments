
// Read a file, remove all the extra spaces and write it back to the same file.

// const fs = require('fs').promises
// async function modifyData(filePath) {
//     try {
//         const data = await fs.readFile(filePath, 'utf-8')
//         const trimFile = data.replace(/\s+/g, '').trim()

//         await fs.writeFile(filePath, trimFile, 'utf-8')
//         console.log('file modified Successfully');

//     } catch (error) {
//         console.error("something is wrong, please look at the error :", error)
//     }
// }

// modifyData('File2.txt')


/*
Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/


// function timeupdate() {

// setInterval(()=>{
// let time = new Date();
//  let currentTime = time.toLocaleTimeString('en-Us',{hour: `2-digit`, minute: `2-digit`, second: `2-digit`})
//  console.log(`${currentTime}`);
// },1000)


// }

// timeupdate()



// setInterval(() => {
        
//     let now = new Date();
//     let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

//     console.log(`${currentTime}`);
// }, 1000)