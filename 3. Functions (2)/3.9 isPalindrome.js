function isPalindrome(str){
  var reverseStr = str.split("").reverse().join("")
  // Splits string, reverses and re-assembles it
  if (reverseStr.toUpperCase() == str.toUpperCase()){
    // If backwards string is the same, return true
    return true
  }
  else {
    return false
  }
}

console.log(isPalindrome(prompt("String to check: ")))