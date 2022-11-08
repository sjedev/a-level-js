var output = 1

function factorial(number){
  for (i = 1; i < number; i++){
    output += output * i
  }
  return(output)
}

console.log(factorial(prompt("Number to find factorial of: ")))