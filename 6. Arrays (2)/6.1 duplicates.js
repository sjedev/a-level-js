var prompt = require("prompt-sync")();

var array = [1, 1, 2, 2, 3, 3, 3, 4, 5]
var noDuplicates = []

for(let i in array){
    if(noDuplicates.indexOf(array[i]) == -1){
        noDuplicates.push(array[i])
    }
}

console.log(noDuplicates)