var prompt = require('prompt-sync')();

let marks = [42, 12, 23, 12, 49, 45, 12, 33, 41, 39]
var sum = 0
var mean = 0

for(let i in marks){
  sum += marks[i]
}

mean = sum / marks.length

console.log(mean)