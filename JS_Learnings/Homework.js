// Function name should be there
// Recommendation on which car based on Family size and Distance to ride


var familySize = 4
var distanceToTravel= 500

function recommendedCar(familySize,distanceToTravel) {
    if (familySize <=4 && distanceToTravel < 200) {
    return "suited Car is Tesla"
}else if (familySize <=4 && distanceToTravel >200) {
     return "suited Car is Toyota"
}else if (familySize >4) {
    return "suited is Minivan"
}
}


let carRecommendation = recommendedCar(familySize,distanceToTravel)

console.log(carRecommendation)

