var prompt = require("prompt-sync")();

function countEven(int){
    return (Math.floor(int / 2))
}

console.log(countEven(prompt("Enter a positive integer: ")))