export function printAge(age) {
    console.log(age)
}

class CustomerDetails {

    printFirstName(firstname){
        console.log(firstname)
    }
/**This method will print lastname
 * 
 * @param {String} lastname 
 */
    printLastName(lastname){
        console.log(lastname)
    }
}


export const  namecanbeanything = new CustomerDetails()