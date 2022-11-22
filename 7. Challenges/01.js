var prompt = require("prompt-sync")();

function checkNums(num1, num2){
    if ((Number(num1) + Number(num2)) == 100){
        return true
    }
    else if (num1 == 100 || num2 == 100){
        return true
    }
    else {
        return false
    }
}

console.log(checkNums(prompt("Number 1: "), prompt("Number 2: ")))