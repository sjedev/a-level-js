var prompt = require("prompt-sync")();

function largestEvenNum(list){
    var arr = list.split(", ")
    var evenNums = []
    var topEvenNum = 0
    for(let i in arr){
        if(Number(arr[i]) % 2 === 0){
            evenNums.push(arr[i])
        }
    }
    for(let i in evenNums){
        if(Number(evenNums[i]) > topEvenNum){
            var topEvenNum = Number(evenNums[i])
        }
    }
    if(topEvenNum == 0){
        return "-1"
    }
    return topEvenNum
}

console.log(largestEvenNum(prompt("Enter a list of integers, separated by ', ': ")))