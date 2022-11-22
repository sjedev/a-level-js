var prompt = require("prompt-sync")();

function newString(str){
    if (String(str.substring(0, 4)) == "New!"){
        return (str.substring(5,));
    }
    else {
        return ("New! " + str);
    }
}

console.log(newString(prompt("Enter string: ")))