var prompt = require("prompt-sync")();

function replaceChar(str){
    if(str.length >= 1){
        return ("$" + str.substr(1,))
    }
    else {
        return "Less than 1 char"
    }
}

console.log(replaceChar(prompt("Input a string: ")))