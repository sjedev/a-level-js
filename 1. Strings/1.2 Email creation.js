let fullName = prompt("Enter your first and second name: ")
// Split in the middle where there is a whitespace
var nameArray = fullName.split(" ")

// lastf@colchsfc.ac.uk
console.log("\n" + nameArray[1].toLowerCase() + nameArray[0][0].toLowerCase() + "@colchsfc.ac.uk")

// First.Last@colchsfc.ac.uk
console.log(nameArray[0] + "." + nameArray[1] + "@colchsfc.ac.uk")

// lastF@colchsfc.ac.uk
console.log(nameArray[1].toLowerCase() + nameArray[0][0].toUpperCase() + "@colchsfc.ac.uk")

// f_last@colchsfc.ac.uk
console.log(nameArray[0][0].toLowerCase() + "_" + nameArray[1].toLowerCase() + "@colchsfc.ac.uk")