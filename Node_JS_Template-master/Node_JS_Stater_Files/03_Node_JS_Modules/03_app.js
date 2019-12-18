// Load os module
const os = require('os');
const fs = require('fs');
const path = require('path');

// total Memory
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory}`);

// free memory
let freeMemory = os.freemem();
console.log(`free Memory : ${freeMemory}`);

// home dir
let homeDir = os.homedir();
console.log(`Home Dir : ${homeDir}`);

// hostname
let hostName = os.hostname();
console.log(`Host Name : ${hostName}`);

// username
let username = os.userInfo().username;
console.log(`User Name : ${username}`);

// Write to a file
let message = 'On Windows, if the file descriptor is connected to the console (e.g. fd == 1 or stdout) a string containing non-ASCII characters will not be rendered properly by default, regardless of the encoding used. It is possible to configure the console to render UTF-8 properly by changing the active codepage with the chcp 65001 command. See the chcp docs for more details.';
fs.writeFile('data.txt',message, 'utf8' , (err) => {
    if(err) throw  err;
    console.log('data is saved');
});

// READ from a file
fs.readFile('data.txt','utf8' , (err , data) => {
    if(err) throw  err;
    console.log(data);
});

// READ the current file write to another file
fs.readFile('03_app.js','utf8' , (err,data) => {
    if(err) throw  err;
    fs.writeFile('program.txt',data,'utf8' , (err) => {
        if(err) throw  err;
        console.log('data is saved');
    });
});

// dir Path
console.log(`Dir Path : ${__dirname}`);

// file path
console.log(`File Path : ${__filename}`);

// Dynamic Path
let dirPath = path.join(__dirname,'data','employee','employee.txt');
console.log(`Dynamic Path : ${dirPath}`);

// Create employee.txt
fs.writeFile(path.join(__dirname,'data','employee','employee.txt'),'Welcome to Node JS','utf8',(err) => {
        if(err) throw  err;
        console.log('data is saved');
});