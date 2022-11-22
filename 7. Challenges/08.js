var prompt = require("prompt-sync")();

function closeTo100(num1, num2){
    if(num1 > 100){
        var num1Margin = num1 - 100
    }
    else{
        var num1Margin = num1 + 100
    }
    if(num2 > 100){
        var num2Margin = num2 - 100
    }
    else{
        var num2Margin = num2 + 100
    }
    if(num1 < num2){
        return (num1 + " is closer")
    }
    else{
        return (num2 + " is closer")
    }
}

console.log(closeTo100(prompt("Number 1: "), prompt("Number 2: ")))