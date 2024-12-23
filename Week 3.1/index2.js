let num1 = 10
let num2 = 25
let num3 = 34
let num4 = 57
let num5 = 60
let num6 = 84


//Functions Export
const calculate = require ("./LabXX")

console.log (calculate.Add(num5, num1))

console.log (calculate.Subtract(num2, num4))

console.log (calculate.Multiply(num3, num6))

console.log (calculate.Divide(num1, num5));

console.log (calculate.ComplexTotal(num6, num3, num2, num5))
