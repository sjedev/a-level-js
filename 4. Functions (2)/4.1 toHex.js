function toHex(denary){
  return(parseInt(denary).toString(16).toUpperCase())
  // Ensures denary is an integer, converts to hex, makes upper case
}

console.log(toHex(prompt("Number to convert: ")))