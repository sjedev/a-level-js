const date = new Date();
var prompt = require("prompt-sync")();

function getDateStr(){
    return(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())  
}

console.log(getDateStr())