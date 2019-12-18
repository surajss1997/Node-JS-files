let greet = () => {
    return "Hello";
};

let sum = (a , b) => {
    return a + b;
};

let createStudent = () => {
    let student = {
        name : 'Rajan',
        age : 20,
        course : 'CSE'
    };
    return student;
};

let getColors = () => {
    let colors = ['red' , 'green' , 'blue' , 'yellow'];
    return colors;
};

module.exports = {
    greet,
    sum,
    createStudent,
    getColors
};