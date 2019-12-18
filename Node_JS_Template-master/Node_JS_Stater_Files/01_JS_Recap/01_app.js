// Object
let student = {
    name : 'Rajan',
    age : 21,
    course : 'Engineering',
    college : 'CBIT'
};
console.log(student);

// function
let printStudent = (student) => {
    let message = `NAME : ${student.name}
                   AGE : ${student.age}
                   COURSE : ${student.course}`;
    return message;
};
let output = printStudent(student);
console.log(output);

// Arrays
let employees = [
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'John',
        age : 45,
        designation : 'Sr. Manager',
        active : false
    },
    {
        name : 'Wilson',
        age : 50,
        designation : 'Chief Technical Officer',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Software Trainee',
        active : false
    }
];

// Junior Employees
let juniorEmployees = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(juniorEmployees);

// Senior Employees
let seniorEmployees = employees.filter((employee) => {
    return employee.age > 30;
});
console.log(seniorEmployees);