var prompt = require("prompt-sync")();

function getExtension(filename){
    var splitname = filename.split(".")
    return splitname[1]
}

console.log(getExtension(prompt("File name: ")))