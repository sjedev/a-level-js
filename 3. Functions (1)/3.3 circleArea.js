// Declare pi as a constant
const pi = 3.14

// Area = pi * (r ** 2)
function circleArea(radius){
  return((radius ** 2) * pi)
}

console.log(circleArea(prompt("Radius of the circle ")))