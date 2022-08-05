// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * 1. get criterias
 * gen chars based on each criteria
 */
function generatePassword() {

  var length = parseInt(prompt("Please enter password lenght"));

  if(length<8 || length>128)
  {
    alert("Please enter password length between 8 and 128");
    generatePassword();
  }

  var upperConfirm = confirm("Do you want uppercase letters in your password?")
  var lowerConfirm = confirm("Do you want lowercase letters in your password?")
  var numbersConfirm = confirm("Do you want numbers in your password?")
  var specialConfirm = confirm("Do you want special characters in your password?")


//   let criteria = [
//     getLength,
//     includeLower,
//     includeUppercase,
//     includeNumeric,
//     includeSpecialChars,
//   ];
// }

// function makeRandomChar(index) {
//   let lower = "a".charCodeAt(0); //98
//   let upper = "z".charCodeAt(0); //98+26
//   let numberSpace = upper - lower;

//   // 98: a => + (50% * 26)
//   let charIndex = lower + Math.floor(Math.random() * numberSpace);
//   let result = String.fromCharCode(charIndex);

//   console.log(index, result);

//   return result;
// }

// /** @returns { string[] }}  lower case chars*/
// function getLength() {
//   let length = prompt("Specify the length of the password between 8 and 128");
//   if (Number.isNaN(length)) {
//     length = getLength();
//   } else if (length < 8) {
//     length = 8;
//   } else if (length > 128) {
//     length = 128;
//   }

//   return new Array(Number(length))
//     .fill(null)
//     .map((_, index) => makeRandomChar());
// }

// function includeLower(/** @type string[] */ charArr) {
//   let result;
//   switch (prompt('Should lowercases be included, type "yes" or "no"')) {
//     case "yes": {
//       result = charArr;
//       break;
//     }
//     case "no":
//       {
//         result = charArr.map((/** @type string */ char) =>
//           char.toLocaleUpperCase()
//         );
//       }
//       break;
//     default: {
//       result = includeLower(charArr);
//     }
//   }
//   return result;
// }

// function includeUppercase(/** @type String[] */ charArray) {
//   let result;
//   switch(prompt('Should uppercases be included')){
//     case 'yes':{
//       //get all lowercase indexes,
//       // conveert half of them to uppercase

//       let lowerCaseIndexes = charArray.map((char,index)=> [char, index]).filter(([char])=> /[a-z]/.test(char) )

//       for(cont [lowerCaseChar,index] of lowerCaseIndexes){
        
//       }
//       break;
//     };
//     case 'no':{
//       result = charArray;
//       break;
//     }
//     default:{
//       result = includeUppercase(charArray);
//     }
//     return result;
//   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
