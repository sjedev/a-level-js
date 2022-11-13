var phrase = "the thing about the word the is that the is one of the most commonly used words"
var frequency = {};
// Using an array of objects means we can have each character as its own item and then give it a counter property that we can increment

for (var i=0; i<phrase.length;i++) {
    var character = phrase.charAt(i);
    // If the character exists in the object
    if (frequency[character]) {
        // Increment by 1 when character encountered
        frequency[character]++;
    } else {
        // If it doesn't exist, then initialise the variable with 1
        frequency[character] = 1;
    }
}

console.log(frequency)