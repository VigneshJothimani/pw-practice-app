//Logical operator 
// AND && < All the values should be true > for expressoion to be true
// OR || < Any 1 value should be true > for the expression to be true
// NOT ! <Not True>

console.log(true && true)
console.log(false && true)

console.log(false||true)
console.log(false || false)


console.log('Test for AND && operator')
var ageisMorethanEighteen = true
var isUScitizen = true
var eLigblleforLisence = ageisMorethanEighteen && isUScitizen
console.log("Is this customer eligible for licence "+eLigblleforLisence)

console.log('Test for OR || operator')
var ageisMorethanEighteen = false
var isUScitizen = true
var eLigblleforLisence = ageisMorethanEighteen || isUScitizen
console.log("Is this customer eligible for licence "+eLigblleforLisence)

console.log("Test for NOT ! operator")
console.log(6 !== 10)