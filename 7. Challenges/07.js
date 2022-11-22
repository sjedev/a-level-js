var prompt = require("prompt-sync")();

function concatenate(str1, str2){
    return(str1.substr(1,) + str2.substr(1,))
}

console.log(concatenate(prompt("First string: "), prompt("Second string: ")))