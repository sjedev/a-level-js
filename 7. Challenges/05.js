var prompt = require("prompt-sync")();

function func(str){
    if(str.length <= 3){
        return str
    }
    else{
        return (str.substr(str.length - 3) + str + str.substr(str.length - 3))
    }
}

console.log(func(prompt("Enter string: ")))