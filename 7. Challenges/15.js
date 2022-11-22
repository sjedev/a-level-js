var prompt = require("prompt-sync")();

function isLeapYear(year) {
    leap = new Date(year, 1, 29)
    isLeap = leap.getDate() === 29;
    return isLeap
}

console.log(isLeapYear(prompt("Enter year: ")))