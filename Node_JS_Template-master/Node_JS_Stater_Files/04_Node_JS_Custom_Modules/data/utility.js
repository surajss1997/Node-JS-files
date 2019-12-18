let greet = (name) => {
    console.log(`Good Morning : ${name}`);
};

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Random Mobile numbers
let getMobileNumbers = (pattern) => {
    let mobileNumbers = [];
    let startNumber = pattern.toString();
    for(let i=1; i<=10000; i++){
        let lastNumber = Math.floor(Math.random() * 1000000);
        let mobileNumber = startNumber + lastNumber;
        if(mobileNumber.length === 10 && mobileNumbers.length <= 1000){
            mobileNumbers.push(mobileNumber);
        }
    }
    return mobileNumbers;
};


// Export the js functions
module.exports = {
    greet,
    reverseString,
    getMobileNumbers
};
