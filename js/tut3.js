// var str = "     youRsthat        SenIortHat     "
var str = "yoursthatsenior"

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// index   012345..........

// length

var len = str.length

// console.log(len)

// slice() // rsth // str.slice(starting index, end index +1)

// var slicedString = str.slice(3,7)
var slicedString = str.slice(0,len)
// console.log(slicedString)


// substring() // rsth //  str.substring(starting index, end index +1)
var subString = str.substring(3,7)
// console.log(subString)

// substr() // rsth // str.substr(starting index, number of character to be extracted)

var subStr = str.substr(3, 4)
// console.log(subStr)


// replace() // changing very first occurence

// var output = str.replace('that', 'this')
// console.log(output)


// replaceAll() // changes all occurences

var output = str.replaceAll("that", 'this')
// console.log(output)

// toUpperCase()

var upper = str.toUpperCase();
// console.log(upper)


// toLowerCase()

var lower = str.toLowerCase();
// console.log(lower)


// concat()
var concatenatedString = str.concat(" concat me")
// console.log(concatenatedString)

// trim()

var trimmedString = str.trim();
// console.log(trimmedString)
// console.log(str)

// trimStart()

var startTrimmedString = str.trimStart();
// console.log(startTrimmedString)
// trimEnd()

var endTrimmedString = str.trimEnd();
// console.log(endTrimmedString)

// charAt()

// console.log(str.charAt(3)) //r

// split() // string.split(delimeter)

var splittedOutput = paragraph.split("do")
console.log(splittedOutput)







// character single alphabet
// 'd','[', '0', ';'

// string:-  set of characters
// example :- 'nikhil', '42', 'Date', 'true'

// '', ""

// var str1= "nikhil"
// var str2= 'nikhil'

// var str3= " 'write text here' "

// ternary string => we will see in later part



// var firstName = "Nikhil"
// var lastName = "Gupta"


// concatenation of string // + works in case of strings also

// var fullName = firstName + " " + lastName;

// console.log(fullName)