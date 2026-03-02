//Conditonal statement

//if(condition) {
 //    execute some code here
//} else  {
//    execute some code here
// }

//if hour between 6 and 12 print "Good Morning"
//if hour between 12 and 18 prit "good aftern"
// otherwise : Good Evening

var hour = 17
if (hour >=6 && hour <=12){
    console.log("Good Morng")
} else if(hour >=12 && hour <=18) {
    console.log("Good evening")
} else {
    console.log("Good Night")}

var ageisMorethanEighteen = true
var isUScitizen = true

if(ageisMorethanEighteen && isUScitizen) {
    console.log("Lincense Eligible")
} else {
    console.log("License not Eligible")
}