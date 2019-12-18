let countAs = (str) => {
    let count = 0;
    for(let i=0 ; i<str.length; i++){
        let ch = str.charAt(i);
        if(ch === 'a' || ch === 'A'){
            count++;
        }
    }
    return count;
};

let reverseString = (str) => {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        let ch = str.charAt(i);
        tempStr += ch;
    }
    return tempStr;
};

let numbers = ['ZERO' , 'ONE' , 'TWO' ,'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
let displayWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++) {
        let digit = Number.parseInt(str.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};

let displayPalindromeWordNumber = (str) => {
    return displayWordNumber(convertToPalindrome(str));
};

let displayReverseWordNumber = (str) => {
    return displayWordNumber(reverseString(str));
};

let triangleOne = (str) => {
    let tempStr = '';
    for(let i=str.length; i >= 1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};

module.exports = {
    countAs,
    reverseString,
    displayWordNumber,
    displayPalindromeWordNumber,
    displayReverseWordNumber,
    triangleOne
};