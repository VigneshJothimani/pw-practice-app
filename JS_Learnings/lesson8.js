
//Declarative Function <Can be called anywhere >
function helloone(){
    console.log("Hello One!")
}
helloone()

//Anonoms function  There is no function name <can be called after decalaration>
var helloTwo = function() {
    console.log("Hello Two..!")
}

helloTwo()

//ES6 Function syntax or Arrow function
var helloThree = () =>{
    console.log("Hello Three...!")
}
helloThree()

//Function with Arguments
function printName(name,lastname){
    console.log(name+' '+lastname) //+ is used to joins the strings together in the order they appear
}
printName('Mike','Ducth')

//Function with return < Function to Multiply by 2 >
function multiplybyTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplybyTwo(10)
console.log(myResult)

//import function
import { printAge } from "./helpers/printHelpers.js"
printAge(5)

//import everything
import * as helpers from './helpers/printHelpers.js'
helpers.printAge(7)