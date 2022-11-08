function countSpaces(str){
  return(str.split(" ").length - 1) // Splits at blank space and counts spaces
}

console.log(countSpaces(prompt("String: ")))