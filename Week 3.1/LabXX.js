//Function for Addtion
const sum = (num1, num2) => {
    let sum = num1 + num2;
    return `The sum of ${num1} and ${num2} is: ${sum}`
}

//Function for Subtraction
const sub = (num1, num2) => {
    let sub = num1 - num2;
    return `The difference of ${num1} and ${num2} is: ${sub}`
}

//Function for Multiplication
const prod = (num1, num2) => {
    let prod = num1 * num2;
    return `The product of ${num1} and ${num2} is: ${prod}`
}

//Function for Division
const div = (num1, num2) => {
    if (num2 !==  0) {
        let div = num1 / num2;
        return `The quotient of ${num1} and ${num2} is: ${div}`
    }
    else {
        return `Division by Zero is not allowed. Please change the num2.`
    }
}

//Function for Complex Calculations
const complex = (num1, num2, num3, num4) => {
    let total = num1 / num2 + (num3 * num4)
    return `The quotient of ${num1} and ${num2} plus the difference of ${num3} and ${num4} is: ${total}`
}


//Exporting functions
exports.Add = sum
exports.Subtract = sub
exports.Divide = div
exports.Multiply = prod
exports.ComplexTotal = complex