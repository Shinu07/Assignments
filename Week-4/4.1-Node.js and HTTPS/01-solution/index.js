
/* 
* Assignments #1 - Create a cli
> Create a "command line interface" that lets the user specify a file path and the nodejs process counts the 
  number of words inside it.

ex:
Input - node index.js /Users/kirat/file.txt 
Output - You have 10 words in this file

*/

const fs = require("fs");
const { program } = require("commander")
program.name('counter').description('CLI to access file path and count the number of words').version('0.8.0');

program.command("count").description("count the number of words").argument("<file>","file to count the number of words").action((file)=>{
    fs.readFile(file,"utf-8",function(err,data){
        if(err){
            console.log(err);
        }else {
        const words = data.split(" ").length
        console.log(`You have ${words} words in this file`);
        
        }
    })
})

program.parse()

// run command:-  node index.js count a.txt













