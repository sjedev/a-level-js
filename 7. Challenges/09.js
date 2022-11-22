var prompt = require("prompt-sync")();

function charOccurence(str, char){
    var occurences = 0
    splitStr = str.split("")
    for(let i in splitStr){
        if(str[i] == char){
            var occurences = occurences + 1
        }
    }
    if(occurences >= 2 && occurences <= 4){
        return true
    }
    else{
        return false
    }
}

console.log(charOccurence(prompt("Input string: "), prompt("Input a character: ")))