//Assignment 8

//1. Create a function that takes a number and prints all even numbers upto that number
const printEvenNumber = (num) => {
    for (let i = 0; i <= num; i += 2) {
        console.log(i);
    }
}
printEvenNumber(10);

// 2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.
const employeeArray = [
    {
        fName: "Shruti Gova",
        email: "abdc@gmail.com",
        age: 20,
        address: "Shajapur",
        id: 1111,
        phoneNumber: "1234567890",
        gender: "Female",
        isMarried: false
    },
    {
        fName: "Sanjay",
        email: "abcd@gmail.com",
        age: 60,
        address: "Shajapur",
        id: 1212,
        phoneNumber: "1234567890",
        gender: "Male",
        isMarried: true
    },
    {
        fName: "Rahul",
        email: "abcd@gmail.com",
        age: 70,
        address: "Shajapur",
        id: 1323,
        phoneNumber: "1234567890",
        gender: "Male",
        isMarried: false
    }

]
const func = (employeeArray, age) => {
    let newEmployeeArray = employeeArray.filter((employee) => {
        return employee.age < age;
    }
 )
       return newEmployeeArray;
const emplyoees = func(employeeArray, 50);
console.log(employees);
};

// 3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.

const sorting = (employeeArray,attribute) =>{
    function compareName(a,b){
        if (a.name < b.name){
            return -1;
        }
        if (a.name > b.name){
            return 1;
        }
        else{
            return0;
        }
    }
}
 employeeArray.sort(compareName);
sorting(employeeArray,fName);
