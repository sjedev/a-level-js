let age = prompt("Enter your age: ")

if (age >= 0 && age <= 130) {
  if (age <= 2) {
    console.log("You are a baby")
  } else if (age <= 5) {
    console.log("You are a toddler")
  } else if (age <= 12) {
    console.log("You are a child")
  } else if (age <= 18) {
    console.log("You are a teenager")
  } else if (age <= 66) {
    console.log("You are an adult")
  } else {
    console.log("You are elderly")
  }
} else {
  console.log("Please enter a number between 0 and 130")
}