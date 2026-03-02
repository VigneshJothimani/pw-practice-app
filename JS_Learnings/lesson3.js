//objects 

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    //Array
    cars: ['Volvo','AUdi','BMW']
}
console.log(customer.firstName)
console.log(customer.cars[2])
//dot notation
customer.firstName='Mike'
//Bracker Notation
customer['lastName']= 'Silver'
console.log(customer.firstName,customer.lastName)
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var car = ["Vovlo", "BMW" , "Audi"]
console.log(car[0])
car[1] = "Suzki" 
console.log(car[1])