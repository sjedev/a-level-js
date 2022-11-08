function toBinary(denary){
  return((denary >>> 0).toString(2))
  // right shift w/o sign extension
}

console.log(toBinary(prompt("Number to convert: ")))