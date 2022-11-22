var prompt = require("prompt-sync")();

function ascendingOrder(list){
    var arr = list.split(", ")
    for (let i in arr){
        if (arr[i] > arr[Number(i)+1]){
            return ("Not in order")
        }
        else {
            return ("In order")
        }
    }
}

console.log(ascendingOrder(prompt("Enter a list of integers, separated by ', ': ")))