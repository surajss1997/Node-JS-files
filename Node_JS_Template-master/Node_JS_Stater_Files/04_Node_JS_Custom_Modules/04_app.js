// load custom module
const util = require('./data/utility');
const fileOperations = require('./fileSystem/fileOperations');
const path = require('path');

// greet
util.greet('John');

// reverseString
let message = util.reverseString('Good Morning');
fileOperations.storeToFile(path.join(__dirname,'wishMessage.txt'),message);

// fetch from file
fileOperations.fetchFromFile(path.join(__dirname,'wishMessage.txt'));

// Get Mobile Numbers
let mobileNumbers = util.getMobileNumbers('9844');
// store the data in to a file
fileOperations.storeToFile(path.join(__dirname,'phoneNumbers.txt'),mobileNumbers);
