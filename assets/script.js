// Assignment Code
var generateBtn = document.querySelector("#generate");
var toUpper = function (x) {
  return x.toUpperCase();
};

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letters2 = letters.map(toUpper);

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
 "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

space = [];

var qNumber;
var qSpecial;
var qUpper;
var qLower;

// Write password to the #password input
function writePassword() {
  enter = parseInt(prompt("Please select length of password\nNotice: 8-128 characters only"));
  
  if (!enter) {
      alert("Can't Be Blank\nPlease Try Again");
  } else if (enter < 8 || enter > 128) {     
      enter = parseInt(prompt("INVALID ENTRY\nPlease read our notice"));
  } else {    
      qNumber = confirm("Do you want numbers with that?");
      qSpecial = confirm("How about special characters?");
      qUpper = confirm("Now do you want Uppercase letters?");
      qLower = confirm("Lowercase letters too?");
  };
    if (!qSpecial && !qNumber && !qUpper && !qLower) {
      choices = alert("Why do you hate us?\nPlease pick at least one option");
  }
    else if (qSpecial && qNumber && qUpper && qLower) {

      choices = special.concat(number, letters, letters2);
  }
    else if (qSpecial && qNumber && qUpper) {
      choices = special.concat(number, letters2);
  }
  else if (qSpecial && qNumber && qLower) {
      choices = special.concat(number, letters);
  }
  else if (qSpecial && qLower && qUpper) {
      choices = special.concat(letters, letters2);
  }
  else if (qNumber && qLower && qUpper) {
      choices = number.concat(letters, letters2);
  }
    else if (qSpecial && qNumber) {
      choices = special.concat(number);

  } else if (qSpecial && qLower) {
      choices = special.concat(letters);
  } else if (qSpecial && qUpper) {
      choices = special.concat(letters2);
  }
  else if (qLower && qNumber) {
      choices = letters.concat(number);

  } else if (qLower && qUpper) {
      choices = letters.concat(letters2);
  } else if (qNumber && qUpper) {
      choices = number.concat(letters2);
  }
   else if (qSpecial) {
      choices = special;
  }
  else if (qNumber) {
      choices = number;
  }
  else if (qLower) {
      choices = letters;
  }
  else if (qUpper) {
      choices = space.concat(letters2);
  };
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(password)
console.log(passwordText)