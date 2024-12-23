//Old way of function
function StudentInfo(name, studentNumber) {
    console.log ("Old function style")
    console.log ("Name:", name, "Student Number", studentNumber)
}

//New way of function (arrow function)
const StudentInfo2 = (name, studentNumber) => {
    console.log ("New function style -> arrow function")
    console.log ("Name:", name, "Student Number", studentNumber);
}

let randomName = "Galvin"
let studentNumber = 2409626



StudentInfo (randomName, studentNumber)

StudentInfo2 (randomName, studentNumber)


//Exporting functions

const studentRecords = require("./studentInfo")

console.log(studentRecords.getName())
console.log(studentRecords.Location())
console.log(studentRecords.dob)
console.log(studentRecords.grades(10))

const person = require("./person")

const personOne = new person("Pakson", 22, "Pakson@gmail")
console.log (personOne.getPersonInfo())
console.log(personOne)
