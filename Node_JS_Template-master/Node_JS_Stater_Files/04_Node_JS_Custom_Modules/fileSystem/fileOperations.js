const fs = require('fs');

// write file
let storeToFile = (filePath , data) => {
    fs.writeFile(filePath,data,'utf8',(err) => {
        if(err) throw  err;
        console.log('data is saved');
    });
};

// READ file
let fetchFromFile = (filPath) => {
    fs.readFile(filPath,'utf8',(err,data) => {
        if(err) throw err;
        console.log(data);
    });
};

module.exports = {
    storeToFile,
    fetchFromFile
};