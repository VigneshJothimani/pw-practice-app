//Relational Operator or comparison operator

// > - more than 
// < = less than
// >= - more than or equal to
// <= - less than or equal to

var moreThan = 5 > 6 //false
var lessThan = 6 < 6 // false
var morethanEqualto = 6 >= 8 //false
var lessthanEqualtp = 7 <= 9 //true
console.log(moreThan,lessThan,morethanEqualto,lessthanEqualtp)

//Equalit operator

var x = 1
console.log(x=='1') //true --> just comparing right and left value without datatype comparison [lose comparison]
console.log(x==='1') // false --> comparing RHS and LHS with datatype comparison [Strict comparison] - consider as String
console.log(x===1) // true --> Data type compared so true