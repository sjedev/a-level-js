var prompt = require("prompt-sync")();

function evenInArray(ints){
    var numEven = 0
    arr = ints.split(", ")
    for(let i in arr){
        if((Number(arr[i]) % 2) === 0){
            var numEven = numEven + 1
        }
    }
    return numEven
}

console.log(evenInArray(prompt("List of integers, separated by ', ': ")))