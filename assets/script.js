// Table of Contents 
// 1: Exlusive outside Varriable
// 2: Primary function
// 3: Inside Varriables
// 4: If statements (Please use ctrl+f and select second opion from this on,fist option is in array)
// 5: Random Maths
// 6: Previously Existing code
// 7: Previously Exisiting Listener
// 8: Randomly saved materiel in case of error or correction



// 1:Required variable to make event listener for button work
var generateBtn = document.querySelector("#generate");

// 2: new function required to actually create password
function generatePassword() {
// 3: moved to an inside function varriable collection as exterior didn't work
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
// array method selected after prompting by ta durring office hours
    var comboArray = [];
    var selectionsArray = [];
// new fancy prompts inside of varribles curtesy of MDN resources
    var length = prompt("Please select length of password\nNotice: 8-128 characters only");
    var qNumber = confirm("Do you want numbers with that?\n Press Ok for Yes and Cancel for No");
    var qUpper = confirm("Now do you want Uppercase letters?");
    var qLower = confirm("Lowercase letters too?");
    var qSpecial = confirm("How about special characters?");

// 4: ta informed that if and if else statements were to extreeme and would result in rewriting given code to make work
// regretibly the else if and else comments seem to make the code break down, neccesitating their removal
// see 8 for saved else and else if
if (qNumber) {
    comboArray = comboArray.concat(numbers);}
if (qUpper) {
    comboArray = comboArray.concat(upper);}
if (qLower) {
    comboArray = comboArray.concat(lower);}
if (qSpecial) {
    comboArray = comboArray.concat(special);}
// 5: Randomization code for chosing from the assigned array system (simplicity is thanks to classmate Ali's example)
for (var i = 0; i < length; i++) {
    selectionsArray.push(comboArray[Math.floor(Math.random() * comboArray.length)]);
}
// It brings it all together, return calling back selectionsArray and join esnuring their combination
return selectionsArray.join("");
}
  

// 6: Write password to the #password input
// givencode that was ta encouraged to be left alone as it does function apparently
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// 7: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(comboArray)
console.log(password)
console.log(passwordText)

// 8: All the stuff I had saved or needed
// const letters = ['a', 'b', 'c'];
// const numbers = [1, 2, 3];
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// expected output: "Fire,Air,Water"

// letters.concat(numbers);
// // result in ['a', 'b', 'c', 1, 2, 3]
// if (!enter) {
//     alert("Can't Be Blank\nPlease Try Again");
// } else if (enter < 8 || enter > 128) {     
//     enter = parseInt(prompt("INVALID ENTRY\nPlease read our notice"));  
// if (!qSpecial && !qNumber && !qUpper && !qLower) {
//     choices = alert("Why do you hate us?\nPlease pick at least one option");
