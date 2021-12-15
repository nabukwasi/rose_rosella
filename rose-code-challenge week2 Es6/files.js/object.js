// object literals
let employee1 = "Sonia";
let employeeSalary = 3000000;
let employeePosition = "CEO";

let employeeObject = {
    employee1,
    employeeSalary,
    employeePosition
}

console.log(employeeObject.employee1)
console.log(employeeObject.employeeSalary)
console.log(employeeObject.employeePosition)


// object literal
let studentName = "Rosella";
let course = "Digital programing";
let place = "Kabalagala one stop youth centre";
let gmail =  "rose09@gmail.com";

let studentDetails = {
    studentName,
    course,
    place,
    gmail,

    login(){
        console.log(`${gmail} has logged in`)
    }
}

studentDetails.login()
console.log(studentDetails.studentName)
console.log(studentDetails.course)
console.log(studentDetails.place)


// object literal with function
let num1 = 7;
let num2 = 10;
let num3 = 20;
let num4 = 30;

let addNumbers = (num1,num2,num3,num4) => {

        
    return {
        
        num1,
        num2,
        num3,
        num3,
        
    }

}
let sumOfAllNumbers = num1 + num2 + num3 + num4 
console.log(sumOfAllNumbers)

// let characters = {
//     name: "Rosella",
//     age: 20,
//     email: "rose@gmail.com",
//     course: "programming",
//     login(){
//         console.log(this.email, "has logged in")  // this refers to the object in this case 
    // }
// }

// console.log(characters.email);

// characters.login()