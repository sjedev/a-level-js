var prompt = require("prompt-sync")();

function strLenReturn(str){
    if((Number(str.length % 2)) == 0){
        return str.substr(0, str.length / 2)
    }
    else {
        return str
    }
}

console.log(strLenReturn(prompt("Input string: ")))