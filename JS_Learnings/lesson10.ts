
var customerFirstName = "John"
var customerLastName = "Smith"
var customerAge = "28"
var CustomerAge =27 //Already assigned varible datatype cannot be changed
var CustomerFirstname = 100 //but it is accepting now 
//last decalred value is accepted

var customerFirstName1: String = "John"
var customerLastName2:String = "Smith"
//var customerAge2:number = "27" //Number should be assigned instead of String


console.log(CustomerAge,CustomerFirstname)

type Customer = {firstName: string,lastName: string, isActive: boolean}

var FirstCustomer : Customer = {
    firstName : "Abara",
    lastName : "Kadabara",
    isActive : true

}

console.log(FirstCustomer)

//**var SecondCustomer : Customer = {
   // firstName : "Abara",
   // lastName : "Kadabara",
   // isActive : "Test" //Only assigned data type should be declared
    //occupation: // We should not add addtional varaible
//}


