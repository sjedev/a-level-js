var prompt = require("prompt-sync")();

var phrase = "the thing about the word the is that the is one of the most commonly used words"
var noDuplicates = []

var phraseUpper = phrase.toUpperCase()
var phraseSplit = phraseUpper.split(" ")

for(let i in phraseSplit){
    if(noDuplicates.indexOf(phraseSplit[i]) == -1){
        noDuplicates.push(phraseSplit[i])
    }
}

console.log(noDuplicates)