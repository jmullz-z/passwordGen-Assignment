// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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
  let criteria = [
    getLength,
    includeLower,
    includeUppercase,
    // includeNumeric,
    // includeSpecialChars,
  ];
}

function makeRandomChar(index) {
  let lower = "a".charCodeAt(0); //98
  let upper = "z".charCodeAt(0); //98+26
  let numberSpace = upper - lower;

  // 98: a => + (50% * 26)
  let charIndex = lower + Math.floor(Math.random() * numberSpace);
  let result = String.fromCharCode(charIndex);

  console.log(index, result);

  return result;
}

/** @returns { string[] }}  lower case chars*/
function getLength() {
  let length = prompt("Specify the length of the password between 8 and 128");
  if (Number.isNaN(length)) {
    length = getLength();
  } else if (length < 8) {
    length = 8;
  } else if (length > 128) {
    length = 128;
  }

  return new Array(Number(length))
    .fill(null)
    .map((_, index) => makeRandomChar());
}

function includeLower(/** @type string[] */ charArr) {
  let result;
  switch (prompt('Should lowercases be included, type "yes" or "no"')) {
    case "yes": {
      result = charArr;
      break;
    }
    case "no":
      {
        result = charArr.map((/** @type string */ char) =>
          char.toLocaleUpperCase()
        );
      }
      break;
    default: {
      result = includeLower(charArr);
    }
  }
  return result;
}

function includeUppercase(/** @type String[] */ charArray) {
  let result;
  switch(prompt('Should uppercases be included'))
  {
    case 'yes':{
      //get all lowercase indexes,
      // conveert half of them to uppercase

      let lowerCaseIndexes = charArray.map((char,index)=> [char, index]).filter(([char])=> /[a-z]/.test(char) )

      for(cont [lowerCaseChar,index] of lowerCaseIndexes){
        
      }
      break;
    };
    case 'no':{
      result = charArray;
      break;
    }
    default:{
      result = includeUppercase(charArray);
    }
    return result;
  }
}

function includeNumeric() {}

function includeSpecialChars() {}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//let upper=["A","B"]
//let lower= ["a", "b"]
//let numeric= ["1","9",]
//let specialChars= ['@',
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
'.',]

function passwordselections (){
  let length= parseInt (
  prompt ("how long is password"),
  10)

  //let specialChar= confirm ("click ok to confirm")

}

function passwordGen() {
  let selections= //password selections()
  let (password=[])
  if (selections . specialChar) {
    password . push(getRandom(specialChars) )
  }

} function passwordGen() {
  let seclections= //password selections()
  let (password= [])
  if (selections . numeric) 
  password . push(getRandom(numeric) )
  }

{ function passwordGen() {
  let selections= //password selcections()
  let (password= [])
  if (selections . Uppercase)
  password . push(getRandom(Uppercase) )
    }
  
  { function passwordGen() {
    let selections= //password selections()
    let (password= [])
    if (selections . lowercase)
    password . push(getRandom(lowercase))
  }
    }
