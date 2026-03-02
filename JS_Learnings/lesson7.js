
// for intialisation , condition and increment or decrement

for(let i=0 ; i<5 ; i++) {
 console.log("Hello World"+i)
}


// Array of loop
 var cars = ['Volvo','AUdi','BMW']
  for(let car of cars){
console.log(car)
 if(car=="AUdi"){
    break
 }
  }

// ES6 Syntax for Each loop

cars.forEach(car => {
    console.log(car)
})