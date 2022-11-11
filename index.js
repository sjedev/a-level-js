var prompt = require("prompt-sync")();

var phrase = "the thing about the word the is that the is one of the most commonly used words"
var frequency = []

var phraseUpper = phrase.toUpperCase()
var phraseSplit = phraseUpper.split("")

frequency.push(phraseSplit[0])
frequency[0].push("1")

console.log(frequency)