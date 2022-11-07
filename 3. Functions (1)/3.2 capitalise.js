function capitalise(input){
  return input.replace(
    /\w\S*/g, // / starts RegEx, \w finds all word characters, \S is any character that is not a whitespace, * look for n zero or more times
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      // Changes first letter to capital, following letters to lower case
    }
  );
}

console.log(capitalise(prompt("String to convert to title case: ")))