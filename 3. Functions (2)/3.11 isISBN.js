// isISBN, for ISBN-10 codes

let sum = 0

function isISBN(str){
  // Reverse ISBN for calculation
  var reverseISBN = str.split("").reverse().join("")
  for(i = 0; i < 10; i++){
    sum += Number(reverseISBN[i]) * (i + 1)
  }
  // If sum % 11 is 0, it is a valid ISBN code
  if((sum % 11) === 0){
    return("Valid ISBN-10")
  }
  else{
    return("Invalid ISBN-10")
  }
}

console.log(isISBN(prompt("ISBN-10 to check: ")))